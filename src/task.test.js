import Tasks from './task';
import CreateToDo from './construct';
jest.mock('./task');
//const CreateToDo = require('./construct');
const addItem = new Tasks();
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

global.localStorage = localStorageMock;

test('data is added into local storage', () => {
  const task = new CreateToDo(false, 'json data');
  const tasks = {
    task: [{ completed: false, description: 'json data', index: 1 }],
  };
  Tasks.addTodo(task);
  expect(Tasks.addTodo(task)).toEqual(tasks.task);
});
