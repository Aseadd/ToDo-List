// import _ from 'lodash';
import './style.css';

const taskInput = document.querySelector('.task-input input');
let todos = JSON.parse(localStorage.getItem('todo-list'));
const taskBox = document.querySelector('.task-box');

const showTodo = () => {
  let li = '';

  if (todos) {
    todos.forEach((todo, id) => {
      const isCompleted = todo.status === 'completed' ? 'checked' : '';
      li += ` <li class="task">
              <label for="${id}">
                <input class='task-item' type="checkbox" id="${id}" ${isCompleted}>
                <p class='${isCompleted}'> ${todo.name}</p>
              </label>
              <div class='settings'>
                <i onclick='showMenu(this)' class='uil uil-ellipsis-v'></i>
                <ul class='task-menu'>
                  <li><i class='uil uil-trash'></i></li>
                </ul>
              </div>
            </li>`;
    });
  }
  taskBox.innerHTML = li;
};
showTodo();

// const taskItem = document.querySelector('.task-item');
// taskItem.addEventListener('click', updateStatus);

// const showMenu = (selectedTask) => {
//   console.log(selectedTask);
// };

// function updateStatus(selectedTask) {
//   let taskName = selectedTask.parentElement.lastElementChild;
//   if (selectedTask.checked) {
//     taskName.classList.add('checked');
//     todos[selectedTask.id].status = 'completed';
//   } else {
//     todos[selectedTask.id].status = 'pending';
//     taskName.classList.remove('checked');
//   }
//   localStorage.setItem('todo-list', JSON.stringify(todos));
// }
taskInput.addEventListener('keyup', (e) => {
  const userTask = taskInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!todos) {
      todos = [];
    }
    const taskInfo = { name: userTask, status: false };
    todos.push(taskInfo); // adding new task to todos
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }
  showTodo();
});
