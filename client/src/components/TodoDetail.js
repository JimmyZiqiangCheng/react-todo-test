import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetail = () => {
    const [todo, setTodo] = useState({});
    const { id } = useParams();
    const todos = useSelector((state) => state.todos);
    // fetch data from json server

    const cur_todo = todos.filter((todo) => todo.id.toString() === id)[0];

    // fetch todo items from server on first rendering
    useEffect(() => {
        setTodo(cur_todo);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="detailpage">
            {todo && (
                <div className="tododetail">
                    <p>description: {todo.description}</p>
                    <p>category: {todo.category}</p>
                    <p>content: {todo.content}</p>
                </div>
            )}
        </div>
    );
};

export default TodoDetail;
