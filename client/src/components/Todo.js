import React from "react";
import { useState } from "react";
import { setSyntheticLeadingComments } from "typescript";

const Todo = () =>{
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('javascript');
    const [content, setContent] = useState('');

    const handleSubmit = e => {

    }

    return(
        <form onSubmit={handleSubmit}>
        <label>
            Description:
            <input type="text" 
            name="description" 
            value={description} 
            onChange = {e=>setDescription(e.target.value)}
            required
            />
        </label>
        <label>
            Category:
            <select
                value={category}
                onChange = {e=>setCategory(e.target.value)}
            >
                <option value="javascript">javascript</option>
                <option value="css">css</option>
            </select>
        </label>
        <label>
            Content:
            <textarea 
                name="content" 
                onChange = {e=>setContent(e.target.value)}
                value = {content}
                required
            />
        </label>
        <button>Submit</button>
        </form>
    )
}
export default Todo;