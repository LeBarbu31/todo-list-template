import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/action/task.action';

export default function EditTask({ editTask }) {

    const [taskTitle, setTaskTitle] = useState(editTask.title);
    const [taskComment, setTaskComment] = useState(editTask.comment);
    const [doneState, setDoneState] = useState(editTask.doneState);
    const dispatch = useDispatch();

    const handleClickSave = () => {
        dispatch(updateTask({
            taskId: editTask.taskId,
            title: taskTitle,
            comment: taskComment,
            doneState: doneState,
        }))
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
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="task-comment">
                            Comments
                        </label>
                        <textarea
                            className="task-comment"
                            id="task-comment"
                            value={taskComment}
                            onChange={(e) => setTaskComment(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="modal-pop-action">
                    <div className="modal-footer">
                        <button onClick={() => handleClickSave()}>save</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
