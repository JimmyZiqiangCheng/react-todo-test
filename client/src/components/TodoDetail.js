import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () =>{
    const { id } = useParams();
    const [todo, setTodo] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const url = `http://localhost:8000/todos/${id}`;

    // fetch data from json server
    const getTodo = async() =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setTodo(data); 
            setIsPending(false);
        }catch (err){
            console.log(err.message);
        }
    }

    // fetch todo items from server on first rendering
    useEffect(()=> {
        getTodo();
    },[]);


    return (
        <div className = "detailpage">
            {isPending && <div>Loading...</div>}
            {todo && 
                <div className = "tododetail">
                    <p>description: {todo.description}</p>
                    <p>category: {todo.category}</p>
                    <p>content: {todo.content}</p>
                </div>   
            }
        </div>
    );
}

export default TodoDetail;