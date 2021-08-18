import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux2/actions/todoActions";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const Posttodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    // states store each field of a todo item
    // const [description, setDescription] = useState("");
    // const [category, setCategory] = useState("javascript");
    // const [content, setContent] = useState("");

    //let's try react hook form
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });

    // upon pressing the submit button, we create a new todo item and store it to the json server
    const onSubmit = (data) => {
        const todoLength = todos.length;
        const newId = todoLength === 0 ? 1 : todos[todoLength - 1].id + 1;
        const todopost = {
            description: data.description,
            category: data.category,
            content: data.content,
            id: newId,
        };

        dispatch(addTodo({ todo: todopost }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Description:
                <input
                    type="text"
                    {...register("description", {
                        required: "description cannot be empty",
                    })}
                />
            </label>
            <label>
                Category:
                <select {...register("category")}>
                    <option value="javascript">javascript</option>
                    <option value="css">css</option>
                </select>
            </label>
            <label>
                Content:
                <textarea
                    {...register("content", {
                        required: "content cannot be empty",
                    })}
                    required
                />
            </label>
            <ErrorMessage errors={errors} name="inputError" />
            <button>Submit</button>
        </form>
    );
};

export default Posttodo;
