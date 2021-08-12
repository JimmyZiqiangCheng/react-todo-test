import { actionTypes } from "../actionTypes/todoActionTypes";

export const loadTodos = () => {
    return async (dispatch, getState) => {
        const response = await fetch("http://localhost:8000/todos");
        const data = await response.json();
        const todos = await data.map((obj) => ({ ...obj, selected: false }));
        dispatch({ type: actionTypes.LOAD_TODOS, payload: { todos: todos } });
    };
};

export const addTodo = (payload) => {
    return async (dispatch, getState) => {
        const response = await fetch("http://localhost:8000/todos", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(payload.todo),
        });
        const data = await response.json();
        const todo = await { ...data, selected: false };
        dispatch({ type: actionTypes.ADD_TODO, payload: { todo: todo } });
    };
};

export const deleteTodo = (payload) => {
    return async (dispatch, getState) => {
        const response = await fetch(
            `http://localhost:8000/todos/${payload.id}`,
            {
                method: "DELETE",
            }
        );
        dispatch({
            type: actionTypes.DELETE_TODO,
            payload: { id: payload.id },
        });
    };
};

export const toggleTodo = ({ id, checked }) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload: { id: id, checked: checked },
    };
};

export const toggleAll = ({ checked }) => {
    return {
        type: actionTypes.TOGGLE_ALL,
        payload: { checked: checked },
    };
};
