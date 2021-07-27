import React from "react";

const Todotable = ({todos, setTodos}) => {
    
    const deleteTodo = id => {
        const newTodos = todos.filter(todos => todos.id !== id);
        setTodos(newTodos);
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
                            <td>{todo.description}</td>
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