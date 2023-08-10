import PropTypes from "prop-types";
import { formatDate } from "@utils/helpers/formatDate";
import "./index.scss"

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <p className="task-card__title">{task.title}</p>
      <p>Created At: {formatDate(task.createdDate)}</p>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default TaskCard;
