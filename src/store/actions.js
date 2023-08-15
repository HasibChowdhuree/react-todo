import { ADD_TASK, DELETE_TASK, SET_TASK_DONE } from "@store/types";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    title: title,
    createdDate: new Date(),
    completedDate: null,
    done: false,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setTaskDone = (taskId) => ({
  type: SET_TASK_DONE,
  payload: taskId,
});
