import './style.css';
import Tasks from './task.js';
import showAllTodo from './function.js';
import slist from './drag.js';

const todos = new Tasks();

const form = document.querySelector('.add-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const items = {
    description: form.elements.todo.value,
  };
  form.reset();
  todos.addTodo(items);
  showAllTodo(todos);
  slist(todos);
});

showAllTodo(todos);

const clear = document.querySelector('.remove');

clear.addEventListener('click', () => {
  todos.clearAll();
  showAllTodo(todos);
});

let isRight = 'Not In Order!';

const genRandom = (array) => {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);
  if (randomized.join('') !== base.join('')) {
    showAllTodo(randomized);
  } else {
    //recursion to account if the randomization returns the original array
    genRandom();
  }
};
