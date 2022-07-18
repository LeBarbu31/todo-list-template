export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_DONESTATE_TASK = 'UPDATE_DONESTATE_TASK';

// Get Tasks list (from LocalStorage)
const getTasksList = () => {
    let tasksReturn = [];
    const loadedTasks = localStorage.getItem('todo-tasks');
    const tasks = JSON.parse(loadedTasks);
    if (tasks) tasksReturn = tasks;
    return tasksReturn;
};

// Save tasks List (in LocalStorage) 
const saveTasksList = (tasks) => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
};

// Get last Implement ID form TaskList
const getLastId = (tasksList) => {
    if (!tasksList.length) return 0;
    return tasksList[tasksList.length - 1].taskId;
};

// Update Task
const updateTaskfromList = (tasksList, taskData) => {
    tasksList.map(task => {
        if (task.taskId === taskData.taskId) {
            task.title = taskData.title;
            task.comment = taskData.comment;
            task.doneState = taskData.doneState;
        };
    });
    return tasksList
};

// Get tasks
export const getTasks = () => {
    return (dispatch, getState) => {
        const tasks = getTasksList();
        dispatch({ type: GET_TASKS, payload: tasks });
    };
};

/**
 * Add task
 * @param {string} taskTitle 
 * @param {string} taskComment 
 */
export const addTask = (taskTitle, taskComment) => {
    return (dispatch, state) => {
        let tasksList = getTasksList();
        const taskToAdd = {
            taskId: getLastId(tasksList) + 1,
            title: taskTitle,
            comment: taskComment,
            doneState: false,
        };
        tasksList.push(taskToAdd);
        saveTasksList(tasksList);
        dispatch({ type: ADD_TASK, payload: tasksList });
    };
};


// Delete task
export const deleteTask = (taskIndex) => {
    return (dispatch) => {
        let tasksList = getTasksList();
        const resultTaskList = tasksList.filter(task => task.taskId !== taskIndex)
        saveTasksList(resultTaskList);
        dispatch({ type: DELETE_TASK, payload: resultTaskList });
    };
};

// Update Task
export const updateTask = (taskData) => {
    return (dispatch) => {
        let tasksList = getTasksList();
        const updatedTaskList = updateTaskfromList(tasksList, taskData);
        saveTasksList(updatedTaskList);
        dispatch({ type: UPDATE_TASK, payload: updatedTaskList });
    };
};