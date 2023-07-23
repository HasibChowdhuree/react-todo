import { formatDate } from "/src/utils/helpers/formatDate";

export const addTask = (title) => ({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    title,
    createdDate: new Date(),
  },
});
