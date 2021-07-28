import React from "react";
import {Link} from "react-router-dom";

const Todotable = ({todosc, setTodosc, setUpdatedNeeded}) => {


    // handle delete individual item
    const deleteTodo = id => {
        const url = `http://localhost:8000/todos/${id}`;
        fetch(url,{
            method:'DELETE',
        }).then(()=>{
            console.log(`todo no.${id} deleted!`);
        })
        setUpdatedNeeded(true);
    }

    const deleteAll = () =>{
        const tobeDeleted = todosc.filter(
            todo => {
                return todo.selected === true;
            }
        ).map(
            deletedItem =>{
                return deletedItem.id
            }
        )
        tobeDeleted.forEach(element => {
            let url = "http://localhost:8000/todos/" + element;
            fetch(url,{
                method:'DELETE',
            }).then(()=>{
                console.log(`todo no.${element} deleted!`);
            })
            setUpdatedNeeded(true);
        });
    }

    // handle the select all behavior
    const handleSelectAll = e => {
        let checked = e.target.checked;
        setTodosc(todosc.map(
            todo => {
                todo.selected = checked;
                return todo;
            })
        );
    }

    // handle select individual item
    const handleSelect = (e, id) =>{
        let checked = e.target.checked;
        setTodosc(todosc.map(
            todo => {
                if (todo.id === id){
                    todo.selected = checked;
                }
                return todo;
            })
        );
    }

    return (
        <>
            <button
                onClick = {()=>deleteAll()}
            >
                Delete Selected
            </button>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type = "checkbox"
                                onChange = {e => handleSelectAll(e)}
                                ></input>
                        </th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>
                    {todosc.map((todo) =>(
                        <tr key = {todo.id}>
                            <th>
                                <input 
                                    type = "checkbox"
                                    onChange = {e => handleSelect(e, todo.id)}
                                    checked={todo.selected}
                                ></input>
                            </th>
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