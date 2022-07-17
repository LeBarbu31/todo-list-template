import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, UPDATE_DONESTATE_TASK } from '../action/task.action';

const intitialState = [];

export default function taskReducer(state = intitialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return action.payload;
        case ADD_TASK:
            return action.payload;
        case DELETE_TASK:
            return action.payload;
        case UPDATE_TASK:
            return action.payload;
        case UPDATE_DONESTATE_TASK:
            return action.payload;
        default:
            return state;
    }
}