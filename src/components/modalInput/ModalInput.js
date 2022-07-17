import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action/task.action';


export default function ModalInput({ showState }) {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskComment, setTaskComment] = useState('');
    const dispatch = useDispatch();

    const handleClickClose = () => {
        showState();
    };

    const handleClickSave = () => {
        dispatch(addTask(taskTitle, taskComment))
        showState();
    };

    return (
        <div className="modal-pop">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>New task</h2>
                </div>
                <div className="modal-body">
                    <div className="input-group">
                        <label htmlFor="task-title">
                            Title<span className="input-require"> *</span>
                        </label>
                        <input
                            className="task-title"
                            id="task-title"
                            type="text"
                            onChange={(e) => setTaskTitle(e.target.value)}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="task-comment">
                            Comments
                        </label>
                        <textarea
                            className="task-comment"
                            id="task-comment"
                            onChange={(e) => setTaskComment(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="modal-pop-action">
                    <div className="modal-footer">
                        <button onClick={() => handleClickSave()}>save</button>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => handleClickClose()}>cancel</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
