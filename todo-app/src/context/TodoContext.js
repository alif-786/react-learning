import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Learn React",
        isCompleted: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = Todocontext.Provider