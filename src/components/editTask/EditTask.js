import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/action/task.action';

export default function EditTask({ editTask }) {

    const [taskTitle, setTaskTitle] = useState(editTask.title);
    const [taskComment, setTaskComment] = useState(editTask.comment);
    const [doneState, setDoneState] = useState(editTask.doneState);
    const [showSaveBtn, setShowSaveBtn] = useState(false);
    const dispatch = useDispatch();

    const handleClickSave = () => {
        if (taskTitle) {
            dispatch(updateTask({
                taskId: editTask.taskId,
                title: taskTitle,
                comment: taskComment,
                doneState: doneState,
            }))
        };
        setShowSaveBtn(false);
    };

    const handleChangeComent = (value) => {
        setTaskComment(value);
        setShowSaveBtn(true);
    };

    const handleChangeState = (value) => {
        setDoneState(value);
        setShowSaveBtn(true);
    };

    const handleChangeTitle = (value) => {
        setTaskTitle(value);
        setShowSaveBtn(true);
    };


    return (
        <div className="edit-container">
            <div className="edit-form">
                <div id="header">
                    <h1 className="page-title">Task</h1>
                </div>
                <div className="input-done">
                    <button
                        className="todo-card-btn done"
                        onClick={() => handleChangeState(!doneState)}>
                        <img className={`done-icon${(!doneState) ? ' inprogress' : ''}`} src="/icons/done.svg" />
                    </button>
                    <label>Task is done</label>
                </div>
                <div className="edit-body">
                    <div className="input-group">
                        <label className="input-label task-title">
                            Title<span className="input-require"> *</span>
                        </label>
                        <input
                            className="input-edit task-title"
                            id="task-title"
                            type="text"
                            value={taskTitle}
                            onChange={(e) => handleChangeTitle(e.target.value)}></input>
                    </div>
                    <div className="input-group">
                        <label className="input-label task-comment">
                            Comments
                        </label>
                        <textarea
                            className="input-edit task-comment"
                            id="task-comment"
                            value={taskComment}
                            onChange={(e) => handleChangeComent(e.target.value)}></textarea>
                    </div>
                </div>
                {(showSaveBtn) &&
                    <div className="edit-footer">
                        <button className="btn-save" onClick={() => handleClickSave()}>Save</button>
                    </div>
                }

            </div>
        </div >
    )
}
