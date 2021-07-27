import React, {useState, useEffect} from "react";
import Posttodo from "./Posttodo";
import Todotable from "./Todotable";

const Todo = () =>{

    // state stores todo items
    const [todos, setTodos] = useState([]);

    // check if it is in pending state
    const [isPending, setIsPending] = useState(true);

    // fetch data from json server
    const getTodos = async() =>{
        try{
            const res = await fetch('http://localhost:8000/todos');
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
    },[])

    return(
        <>
            <Posttodo todos={todos} setTodos={setTodos}/>
            {isPending && <div>Loading...</div>}
            {todos && <Todotable todos={todos} setTodos={setTodos}/>}
        </>
    );
}
export default Todo;