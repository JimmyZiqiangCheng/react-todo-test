import React from "react";
import { useState } from "react";

const Posttodo = () =>{
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('javascript');
    const [content, setContent] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const todopost = {description, category, content};
        console.log(todopost);
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