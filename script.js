const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    `;
    
    taskItem.querySelector('.delete-button').addEventListener('click', () => {
      taskItem.remove();
    });

    taskItem.querySelector('.edit-button').addEventListener('click', () => {
      const newText = prompt('Edit task:', taskText);
      if (newText !== null && newText.trim() !== '') {
        taskItem.querySelector('span').textContent = newText;
      }
    });

    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
      if (taskItem.classList.contains('completed')) {
        completedList.appendChild(taskItem);
      } else {
        pendingList.appendChild(taskItem);
      }
    });

    pendingList.appendChild(taskItem);
    taskInput.value = '';
  }
}
