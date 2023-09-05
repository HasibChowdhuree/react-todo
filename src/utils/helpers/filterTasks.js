import { ALL_TASKS, INCOMPLETE_TASKS, COMPLETE_TASKS } from "@store/types";

export default function filterTasks(tasks, filterState = ALL) {
  switch (filterState) {
    case ALL_TASKS: {
      return tasks;
    }
    case INCOMPLETE_TASKS: {
      return tasks.filter((task) => !task.isDone);
    }
    case COMPLETE_TASKS: {
      return tasks.filter((task) => task.isDone);
    }
  }
}