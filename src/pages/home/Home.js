import React, { useState, useEffect, Fragment } from 'react';
import TodoCard from '../../components/todoCard/TodoCard';
import { useSelector } from 'react-redux';
import AddTask from '../../components/addTask/AddTask';

export default function Home() {

    const todoList = useSelector((state) => state.taskReducer);

    return (
        <div>
            <header id="header">
                <h1 className="page-title">My Todo list</h1>
            </header>

            <AddTask />
            <div className="todo-list">
                <div className="todo-list-order open">
                    {
                        todoList.map((task, key) => (
                            <Fragment key={key}>
                                {(!task.doneState) && (
                                    <TodoCard task={task} key={key} />
                                )}
                            </Fragment>
                        ))
                    }

                </div>
                <div className="todo-list-order close">
                    {
                        todoList.map((task, key) => (
                            <Fragment key={key}>
                                {(task.doneState) && (
                                    <TodoCard task={task} key={key} />
                                )}
                            </Fragment>
                        ))
                    }
                </div>
            </div>

        </div >
    )
}
