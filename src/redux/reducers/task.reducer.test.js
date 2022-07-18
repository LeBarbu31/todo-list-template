import { addTask, getTasks } from "../action/task.action";
import taskReducer, { intitialState } from "./task.reducer";

test("shoud return the initial state of task reducer", () => {
    const actual = taskReducer(undefined, '');
    const expected = intitialState;
    expect(actual).toEqual(expected);
});

test("shoud return array of task reducer", () => {
    const actual = taskReducer(undefined, getTasks());
    expect(typeof actual).toBe("object");;
});

test("shoud return array with length of task reducer", () => {
    const taskTitle = 'test add task';
    const taskComment = 'test add task';
    const actual = taskReducer(undefined, addTask(taskTitle, taskComment));
    const expected = intitialState;
    expected.push({ title: taskTitle, comment: taskComment })
    expect(actual.length).toBe(expected.length);
});
