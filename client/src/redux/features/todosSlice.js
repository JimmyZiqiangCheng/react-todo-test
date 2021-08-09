import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const loadTodos = createAsyncThunk(
    'todos/fetchTodos', 
    async()=>{
        try {
            const res = await fetch("http://localhost:8000/todos");
            const data = await res.json();
            const todos = await data.map((obj) => ({ ...obj, selected: false }));
            return { todos }
        } catch (err) {
            console.log(err.message);
        }
    }
);

export const addTodo = createAsyncThunk(
    'todos/addTodo', 
    async(payload)=>{
        try{
            const res = await fetch("http://localhost:8000/todos",{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(payload.todo)   
            });
            const todo = await res.json();
            return { todo }
        }catch (err) {
            console.log(err.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async(payload)=>{
        try{
            const res = await fetch(`http://localhost:8000/todos/${payload.id}` ,{
                method:'DELETE',
            });
            return { id: payload.id }
        }catch (err) {
            console.log(err.message);
        }
    }
)

export const todosSlice = createSlice({
    name: 'todos', 
    initialState: [],
    reducers: {
        toggleAll: (state, action) => {
            return state.map(
                todo => ({...todo, "selected": action.payload.checked})
            )
        },
        toggleTodo: (state, action) => {
            return state.map(
                todo => todo.id === action.payload.id? ({...todo, "selected": action.payload.checked}) : todo
            )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.fulfilled, (state, action) => {
                return action.payload.todos;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.push({...action.payload.todo, selected:false})
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                return state.filter((todo) => todo.id !== action.payload.id);
            })
    },
})

export const {toggleAll, toggleTodo} = todosSlice.actions

export default todosSlice.reducer