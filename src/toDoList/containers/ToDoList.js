import React, {useState} from 'react';

/**
 * @class ToDoList
 * @classdesc
 * Main to do container where all tasks are saved.
 */
const ToDoList = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Complete this project",
            completed: false,
        },
        {
            title: "Push it to GitHub",
            completed: false,
        },
        {
            title: "Don't worry, be happy",
            complete: true,
        }
    ]);

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
        newTasks[index].complete = true;
        setTasks(tasks);
    };

    return (
        <ToDoListLayout
            tasks={tasks}
            addTask={addTask}
            completeTask={completeTask}
        />
    )
};

export default ToDoList;