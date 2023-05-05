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
        ${task.description}
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