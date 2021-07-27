import React, {useState, useEffect} from "react";
import Posttodo from "./Posttodo";
import Todotable from "./Todotable";

const Todo = () =>{

    // state stores todo items
    const [todos, setTodos] = useState([]);

    // check if it is in pending state
    const [isPending, setIsPending] = useState(true);

    // check if todos has been updated
    const [updateNeeded, setUpdatedNeeded] = useState(false);

    // url for the json endpoint
    const url = 'http://localhost:8000/todos';

    // fetch data from json server
    const getTodos = async() =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setTodos(data); 
            setIsPending(false);
        }catch (err){
            console.log(err.message);
        }
    }

    // fetch todo items from server on first rendering
    useEffect(()=> {
        getTodos();
        setUpdatedNeeded(false);
    },[updateNeeded]);

    return(
        <>
            <Posttodo todos={todos} setUpdatedNeeded={setUpdatedNeeded}/>
            {isPending && <div>Loading...</div>}
            {todos && <Todotable todos={todos} setUpdatedNeeded={setUpdatedNeeded}/>}
        </>
    );
}
export default Todo;