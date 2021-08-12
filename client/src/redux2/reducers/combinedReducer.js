import { combineReducers } from "redux";
import { todosReducer } from "./todoReducers";
const reducers = combineReducers({
    todos: todosReducer,
});
export default reducers;
