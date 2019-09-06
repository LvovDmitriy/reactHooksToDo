import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Task from '../components/Task';
import '../styles/ToDoListLayout.css';

const ToDoListLayout = ({tasks, addTask, completeTask, removeTask}) => {
    return <Fragment>
        <h2 className={"toDoListHeader"}>Todo - items</h2>
        {/*<TaskCreator addTask={addTask} />*/}
        <div className={'tasksHolder'}>
        {
            tasks.map((task, index) => (
                <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                />
            ))
        }
        </div>
    </Fragment>
};

ToDoListLayout.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default ToDoListLayout;