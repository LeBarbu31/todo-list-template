import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action/task.action';

export default function AddTask() {
    const [taskTitle, setTaskTitle] = useState('');

    const dispatch = useDispatch();

    const handleClickSave = () => {
        if (taskTitle) dispatch(addTask(taskTitle, ''))
    };

    return (
        <div id="form-input">
            <input
                className="standard-input"
                type="text"
                placeholder="Add a task."
                onChange={(e) => setTaskTitle(e.target.value)} />
            <button
                className="todo-btn standard-button"
                type="submit"
                onClick={() => handleClickSave()}>
                Add Task
            </button>
        </div>
    )
}
