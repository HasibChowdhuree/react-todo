import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask, setTaskDone } from "@store/actions";
import { COMPLETED_TASKS, INCOMPLETED_TASKS } from "@utils/constants/texts";
import TaskCard from "@components/TaskCard";
import "./index.scss";

const TaskList = ({ tasks, visibleTaskRange, isFormOpen, filter }) => {
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === COMPLETED_TASKS) return task.isDone;
    if (filter === INCOMPLETED_TASKS) return !task.isDone;
    return true;
  });

  let rangeOfTasks = visibleTaskRange;
  if (isFormOpen) {
    rangeOfTasks -= 1;
  }

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleDone = (taskId) => {
    setTaskDone(taskId);
  };

  return (
    <>
      {filteredTasks?.slice(0, rangeOfTasks).map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          onDelete={() => handleDelete(task.id)}
          onDone={() => handleDone(task.id)}
        />
      ))}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
  visibleTaskRange: PropTypes.number.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TaskList;
