import {
  ADD_TASK,
  DELETE_TASK,
  SET_TASK_DONE,
  EDIT_TASK,
  ALL_TASKS,
  SET_FILTER,
} from "@store/types";

const initialState = {
  tasks: [],
  filterState: ALL_TASKS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SET_TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: true, completedDate: new Date() }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, title: action.payload.newTitle }
            : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filterState: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
