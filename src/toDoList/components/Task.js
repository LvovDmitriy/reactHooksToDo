import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task, index, completeTask, removeTask}) => (
    <div className={"task"}>
        {task.title}
        <button onClick={() => completeTask(index)}>Complete</button>
    </div>
);

Task.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default Task;