import Tasks from './task';
import showAllTodo from './function.js';
jest.mock('./task');
//const CreateToDo = require('./construct');
const addItem = new Tasks();
// const localStorageMock = (function () {
//   let store = {};

//   return {
//     getItem(key) {
//       return store[key];
//     },

//     setItem(key, value) {
//       store[key] = value;
//     },

//     clear() {
//       store = {};
//     },

//     removeItem(key) {
//       delete store[key];
//     },

//     getAll() {
//       return store;
//     },
//   };
// })();

// global.localStorage = localStorageMock;
const task = {
  description: 'Test data',
};
const tasks = { completed: false, description: 'json data', index: 1 };
addItem.addTodo(task);
console.log(addItem.addTodo(task));
console.log(tasks);
test('data is added into local storage', () => {
  expect(addItem.getData()).toEqual(tasks);
});
