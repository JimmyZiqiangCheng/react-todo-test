import React from "react";
import {Link} from "react-router-dom";

const Todotable = ({todos, setUpdatedNeeded}) => {
    
    const deleteTodo = id => {
        const url = `http://localhost:8000/todos/${id}`;
        fetch(url,{
            method:'DELETE',
        }).then(()=>{
            console.log("new todo deleted!");
        })
        setUpdatedNeeded(true);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) =>(
                        <tr key = {todo.id}>
                            <Link to={`/todos/${todo.id}`}> <td>{todo.description}</td> </Link>
                            <td>{todo.category}</td>
                            <td>
                                <button
                                    onClick = {()=> deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>                   
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Todotable;