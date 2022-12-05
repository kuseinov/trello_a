import { configureStore } from "@reduxjs/toolkit";
import ToDoListSlice from "../Slice/AddToDoSlice";

export const store = configureStore({
  reducer: {
    addToDo: ToDoListSlice,
  },
});

export default store;
