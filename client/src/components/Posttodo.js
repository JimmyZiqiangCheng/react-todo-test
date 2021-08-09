import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/features/todosSlice"
const Posttodo = () =>{

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    // states store each field of a todo item
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('javascript');
    const [content, setContent] = useState('');

    // upon pressing the submit button, we create a new todo item and store it to the json server
    const handleSubmit = event => {
        event.preventDefault();
        const todoLength = todos.length;
        const newId = todoLength === 0 ? 1:todos[todoLength-1].id+1;
        const todopost = {description: description, category: category, content: content, id: newId};

        dispatch(addTodo({todo: todopost}))
        setDescription('')
        setCategory('javascript')
        setContent('')
    }

    return(
        <form onSubmit={handleSubmit}>
        <label>
            Description:
            <input type="text" 
            name="description" 
            value={description} 
            onChange = {event=>setDescription(event.target.value)}
            required
            />
        </label>
        <label>
            Category:
            <select
                value={category}
                onChange = {event=>setCategory(event.target.value)}
            >
                <option value="javascript">javascript</option>
                <option value="css">css</option>
            </select>
        </label>
        <label>
            Content:
            <textarea 
                name="content" 
                onChange = {event=>setContent(event.target.value)}
                value = {content}
                required
            />
        </label>
        <button>Submit</button>
        </form>
    )
}

export default Posttodo;