import React, { useState, useEffect } from 'react';
import TodoCard from '../../components/todoCard/TodoCard';
import { getTasks } from '../../redux/action/task.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ModalInput from '../../components/modalInput/ModalInput';

export default function Home() {

    const [addTaskShow, setAddTaskShow] = useState(false);
    const todoList = useSelector((state) => state.taskReducer);

    const showImputModal = () => {
        setAddTaskShow(!addTaskShow)
    }

    return (
        <div>
            <h1 className="page-title">My Todo list</h1>
            {addTaskShow && <ModalInput showState={() => showImputModal()} />}
            {
                todoList.map((task, key) => (
                    <TodoCard task={task} key={key} />
                ))
            }
        </div >
    )
}
