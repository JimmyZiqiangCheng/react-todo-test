import { actionTypes } from "../actionTypes/todoActionTypes";

const initialState = [];

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LOAD_TODOS:
            return payload.todos;
        case actionTypes.ADD_TODO:
            return [...state, payload.todo];
        case actionTypes.DELETE_TODO:
            return [...state.filter((todo) => todo.id !== payload.id)];
        case actionTypes.TOGGLE_TODO:
            return [
                ...state.map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, selected: payload.checked }
                        : todo
                ),
            ];
        case actionTypes.TOGGLE_ALL:
            return [
                ...state.map((todo) => ({
                    ...todo,
                    selected: payload.checked,
                })),
            ];
        default:
            return state;
    }
};
