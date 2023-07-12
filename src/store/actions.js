import { formatDate } from "../utils/helpers/formatDate";

export const addTask = (title) => ({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    title,
    createdDate: formatDate(new Date()),
  },
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});
