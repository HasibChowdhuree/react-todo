import React from 'react';
import { connect } from 'react-redux';
import TaskCard from '../TaskCard';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps)(TaskList);
