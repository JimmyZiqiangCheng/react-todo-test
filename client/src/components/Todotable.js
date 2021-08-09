import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {toggleAll, 
        toggleTodo, 
        loadTodos,
        deleteTodo
        } from "../redux/features/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const Todotable = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const deleteAll = () => {
    const tobeDeleted = todos
      .filter((todo) => {
        return todo.selected === true;
      })
      .map((deletedItem) => {
        return deletedItem.id;
      });
    
    tobeDeleted.forEach((deletedId) => {
      dispatch(deleteTodo({id: deletedId}));
    });
  };

  // handle the select all behavior
  const handleSelectAll = (checked) => {
    dispatch(toggleAll({checked: checked}));
  };

  // handle select individual item
  const handleSelect = (checked, id) => {
    dispatch(toggleTodo({checked: checked, id: id}));
  };

  return (
    <>
      <button onClick={() => deleteAll()}>Delete Selected</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              ></input>
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr key={todo.id}>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelect(e.target.checked, todo.id)}
                    checked={todo.selected}
                  ></input>
                </th>
                <Link to={`/todos/${todo.id}`}>
                  {" "}
                  <td>{todo.description}</td>{" "}
                </Link>
                <td>{todo.category}</td>
                <td>
                  <button onClick={() => dispatch(deleteTodo({id: todo.id}))}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Todotable;
