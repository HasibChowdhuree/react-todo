import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/actions';

import "./index.scss"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div className="task-card">
      <p className="task-card__title">{task.title}</p>
      <p>Created At: {task.createdDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default TaskCard;
