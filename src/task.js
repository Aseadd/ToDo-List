export default function showAllTodo(tasks) {
  const rowField = document.querySelector('.row');
  const listElement = document.querySelector('.list');
  listElement.innerHTML = '';

  tasks.list.forEach((listItem) => {
    listElement.innerHTML += `<div class="row" id="${listItem.index}" >
            <div class="input">
            <input type="checkbox" class="check" ${
              listItem.completed ? 'checked' : ''
            }>
            <input class="list-text" value="${listItem.description}" readonly>
            </div>
            <div class="icon">
            <i class="fas fa-ellipsis-v"></i>
            <i class="far fa-trash-alt hidden"></i>
            </div>
        </div>
      `;
  });

  document.querySelectorAll('.list-text').forEach((listText) => {
    listText.addEventListener('click', () => {
      listText.readOnly = false;
      listText.focus();
      listText.parentNode.parentNode
        .querySelector('.fa-trash-alt')
        .classList.remove('hidden');
      listText.parentNode.parentNode
        .querySelector('.fa-ellipsis-v')
        .classList.add('hidden');
      listText.parentNode.parentNode.style.background = 'rgb(231, 230, 177)';
      listText.style.background = 'rgb(231, 230, 177)';
    });
    listText.addEventListener('change', () => {
      const { id } = listText.parentNode.parentNode;
      const currentTask = tasks.list.find((t) => t.index === +id);
      currentTask.description = listText.value;

      tasks.updateTodo(currentTask);

      setTimeout(() => {
        listText.parentNode.parentNode
          .querySelector('.fa-trash-alt')
          .classList.add('hidden');
        listText.parentNode.parentNode
          .querySelector('.fa-ellipsis-v')
          .classList.remove('hidden');
        listText.readOnly = true;
      }, 200);
    });
  });

  document.querySelectorAll('.fa-trash-alt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const { id } = btn.parentNode.parentNode;
      tasks.removeTodo(+id);
      showAllTodo(tasks);
    });
  });

  document.querySelectorAll('.check').forEach((box) => {
    box.addEventListener('change', () => {
      const { id } = box.parentNode.parentNode;
      const currentTask = tasks.list.find((t) => t.index === +id);
      currentTask.completed = box.checked;
      currentTask.completed = true;
      tasks.updateTodo(currentTask);
    });
  });
}
