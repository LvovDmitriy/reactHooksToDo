import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/Task.css';

const Task = ({task: {title, completed}, index, completeTask, removeTask}) => {
    const titleClassName = classnames({
        'taskTitle': true,
        'taskTitleLineThrough': completed
    });

    return <div className={"task"}>
        <span className={titleClassName}>{title}</span>
        <div className={'taskControlButtons'}>
            <button onClick={() => completeTask(index)}>Complete</button>
            <span onClick={() => removeTask(index)}>&#10008;</span>
        </div>
    </div>;
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default Task;