import React, {useState} from 'react';
import ToDoListLayout from '../components/ToDoListLayout';
import INITIAL_TASKS from '../constants/initialTasks';

/**
 * @class ToDoList
 * @classdesc
 * Main to do container where all tasks are saved.
 */
const ToDoList = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    /**
     * @param {string} title
     */
    const addTask = (title) => {
        const newTasks = [...tasks, {title, completed: false}];
        setTasks(newTasks);
    };

    /**
     * @param {number} index
     */
    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    /**
     * @param {number} index
     */
    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    };

    return (
        <ToDoListLayout
            tasks={tasks}
            addTask={addTask}
            completeTask={completeTask}
            removeTask={removeTask}
        />
    )
};

export default ToDoList;