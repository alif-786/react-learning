import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: todoReducer
});

// create a api request to the github users




