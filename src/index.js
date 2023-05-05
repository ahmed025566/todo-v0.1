import './styles/main.css';
import TaskList from './modules/taskListClass.js';
/* import renderTasks from './modules/renders.js'; */

const tasksContainer = document.querySelector('.tasks-container');

const listOfTasks = [
  {
    index: 1,
    description: 'lorem first',
    completed: false,
  },
  {
    index: 5,
    description: 'lorem fifth',
    completed: false,
  },
  {
    index: 3,
    description: 'lorem third',
    completed: false,
  },
  {
    index: 4,
    description: 'lorem forth',
    completed: false,
  },
  {
    index: 2,
    description: 'lorem second',
    completed: false,
  },
];

const sortTasks = (listOfTasks) => listOfTasks.sort((a, b) => a.index - b.index);
const tasks = new TaskList();

const tasksContainer = document.querySelector('.tasks-container');
const renderTasks = (listOfTasks) => {
  tasksContainer.innerHTML = `
    ${listOfTasks.map((task) => `
      <li class="task dflex">
        <input type="checkbox" name="task-status" id="${task.id}-status">
      <li class="task dflex"  id="task-${task.id}">
        <input type="checkbox" name="task-status">
        ${task.description}
        <i class="fa-solid fa-ellipsis-vertical task-more"></i>
        <div class="icon-swapper dflex">
          <i class="fa-solid fa-ellipsis-vertical task-more"></i>
          <i class="fa-solid fa-eraser task-delete"></i>
      </li>
    `).join('')
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

renderTasks(listOfTasks);dataEntryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const entryField = document.querySelector('.task-entry');
  tasks.addTask(entryField.value);
  entryField.value = '';
  renderTasks(tasks.getTasks());
});
renderTasks(tasks.getTasks());