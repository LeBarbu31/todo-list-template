import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import TaskDetail from '../../components/taskDetail/TaskDetail';

export default function TaskPage() {

    const [editTask, setEditTask] = useState([])

    let { id } = useParams();
    const todoList = useSelector((state) => state.taskReducer);

    useEffect(() => {
        setEditTask(todoList.filter(todo => todo.taskId == id))
    }, [todoList])

    return (
        <>

            {(!editTask.length)
                ?
                <h1>Task don't Exist</h1>
                :
                <TaskDetail editTask={editTask[0]} />
            }

        </>
    );
};
