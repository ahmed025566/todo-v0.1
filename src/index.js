import './styles/main.css';
import TaskList from './modules/taskListClass.js';
/* import renderTasks from './modules/renders.js'; */

const tasks = new TaskList();

const tasksContainer = document.querySelector('.tasks-container');
const renderTasks = (listOfTasks) => {
  tasksContainer.innerHTML = `
    ${listOfTasks.map((task) => `
      <li class="task dflex"  id="task-${task.id}">
        <input type="checkbox" name="task-status">
        <span class="task-desc">${task.description}</span>
        <div class="icon-swapper dflex">
          <i class="fa-solid fa-ellipsis-vertical task-more"></i>
          <i class="fa-solid fa-eraser task-delete"></i>
      </li>
      `).join('')
}`;

  /* EVENT HANDLERS */
  const refreshIcon = document.querySelector('.refresh');
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });

  const currentDescription = document.querySelectorAll('.task-desc');

  currentDescription.forEach((task) => {
    task.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const span = e.target;
      span.classList.add('hidden');

      const taskToChange = span.parentNode.id.replace('task-', '');
      const oldDescription = span.innerText;

      const input = document.createElement('input');
      const icons = span.parentNode.querySelector('.icon-swapper');

      input.value = oldDescription;
      input.classList.add('newdesc-entry');
      span.parentNode.insertBefore(input, icons);

      input.addEventListener('focus', () => {
        input.select();
      });
      input.focus();

      input.addEventListener('input', () => {
        localStorage.setItem('newDesc', JSON.stringify(input.value));
      });

      input.addEventListener('blur', () => {
        const newDescription = JSON.parse(localStorage.getItem('newDesc'));
        localStorage.removeItem('newDesc');

        if (newDescription) {
          tasks.editTask(taskToChange, newDescription);
        }

        input.remove();
        span.classList.remove('hidden');
        renderTasks(tasks.getTasks());
      });

      input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          const newDescription = JSON.parse(localStorage.getItem('newDesc'));
          localStorage.removeItem('newDesc');

          if (newDescription) {
            tasks.editTask(taskToChange, newDescription);
          }

          input.remove();
          span.classList.remove('hidden');
          renderTasks(tasks.getTasks());
        }
      });
    });
  });

  const deleteIcon = document.querySelectorAll('.task-delete');
  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      const taskID = e.target.parentNode.parentNode.id.replace('task-', '');
      tasks.removeTask(taskID);
      renderTasks(tasks.getTasks());
    });
  });
};

const dataEntryForm = document.querySelector('.inputField');
dataEntryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const entryField = document.querySelector('.task-entry');
  tasks.addTask(entryField.value);
  entryField.value = '';
  renderTasks(tasks.getTasks());
});
renderTasks(tasks.getTasks());