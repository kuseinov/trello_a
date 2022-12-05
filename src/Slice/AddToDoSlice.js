import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const ToDoListSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.todo.push(action.payload);
    },
    addSubTask(state, { payload }) {
      const currentTodo = state.todo.find((item) => {
        return item.id === payload.todoId;
      });
      currentTodo.subtasks.push(payload.subtask);
    },
 
  },
});

export const { addToDo, addSubTask } = ToDoListSlice.actions;

export default ToDoListSlice.reducer;
