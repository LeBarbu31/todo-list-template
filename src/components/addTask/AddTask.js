import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action/task.action';

export default function AddTask() {
    const [taskTitle, setTaskTitle] = useState('');

    const dispatch = useDispatch();

    const handleClickSave = () => {
        dispatch(addTask(taskTitle, ''))
    };

    return (
        <div id="form_input">
            <input
                class="standard-input"
                type="text"
                placeholder="Add a task."
                onChange={(e) => setTaskTitle(e.target.value)} />
            <button
                class="todo-btn standard-button"
                type="submit"
                onClick={() => handleClickSave()}>
                Add Task
            </button>
        </div>
    )
}
