import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, updateTask } from '../../redux/action/task.action';

export default function TodoCard({ task }) {

    const dispatch = useDispatch();

    const handleClickDelete = () => {
        dispatch(deleteTask(task.taskId));
    };

    const handleClickDone = () => {
        const taskNewState = task;
        taskNewState.doneState = !task.doneState;
        dispatch(updateTask(taskNewState));
    };

    return (
        <div className="todo-card-container">
            <div className="todo-card-left">
                <button
                    className="todo-card-btn done"
                    onClick={() => handleClickDone()}>
                    <img className={`done_icon ${(!task.doneState) ? 'inprogress' : ''}`} src="./icons/done.svg" />
                </button>
                <label className="todo-card-title">{task.title}</label>
            </div>
            <div className="todo-card-action">
                <button className="todo-card-btn edit">
                    <Link to={`/task/${task.taskId}`}>
                        <img src="./icons/edit.svg" />
                    </Link>
                </button>
                <button
                    className="todo-card-btn delete"
                    onClick={() => handleClickDelete()}>
                    <img src="./icons/delete.svg" />
                </button>
            </div>
        </div>
    )
}
