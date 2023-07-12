const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      // Add logic to delete a task
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
