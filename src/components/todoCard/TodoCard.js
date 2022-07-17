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
            <div className="todo-card-header">
                <div className="todo-card-header-left">
                    <input
                        type="checkbox"
                        className="todo-card-btn done"
                        defaultChecked={task.doneState}
                        onClick={() => handleClickDone()} />
                    <label className="todo-card-title">{task.title}</label>
                </div>
                <div className="todo-card-action">
                    <button
                        className="todo-card-btn delete"
                        onClick={() => handleClickDelete()}>
                        delete
                    </button>
                    <button className="todo-card-btn edit">
                        <Link to={`/task/${task.taskId}`}>edit</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
