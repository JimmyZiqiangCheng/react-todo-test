import React, {useState, useEffect} from "react";
import Posttodo from "./Posttodo";
import Todotable from "./Todotable";

const Todo = () =>{

    const [todos, setTodos] = useState([
        {description: 'lala', category: 'css', content: 'mmm', id: 0},
        {description: 'ooo', category: 'css', content: 'sss', id: 1}
    ]);

    useEffect(()=> {setTodos(todos)},[todos])

    return(
        <>
            <Posttodo todos={todos} setTodos={setTodos}/>
            <Todotable todos={todos} setTodos={setTodos}/>
        </>
    )
}
export default Todo;