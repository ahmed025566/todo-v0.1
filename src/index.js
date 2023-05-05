import './styles/main.css';
import TaskList from './modules/taskListClass.js';

const tasks = new TaskList();

const tasksContainer = document.querySelector('.tasks-container');
const renderTasks = (listOfTasks) => {
  tasksContainer.innerHTML = `
    ${listOfTasks.map((task) => `
      <li class="task dflex"  id="task-${task.id}">
        <input class="task-complete" type="checkbox" name="task-status" ${task.completed ? 'checked' : 'unchecked'}>
        <span class="task-desc${task.completed ? ' crossed-out' : ''}">${task.description}</span>
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

  /* Edit description */
  const currentDescription = document.querySelectorAll('.task-desc');

  currentDescription.forEach((task) => {
    task.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const span = e.target;
      span.classList.add('hidden');

      /* get the task id */
      const taskToChange = span.parentNode.id.replace('task-', '');
      const oldDescription = span.innerText; // allow to cancel edit without changes

      const input = document.createElement('input');
      const icons = span.parentNode.querySelector('.icon-swapper');

      input.value = oldDescription;
      input.classList.add('newdesc-entry');
      span.parentNode.insertBefore(input, icons);

      input.addEventListener('focus', () => {
        input.select(); // easy edit, select the input current description to overwrite
      });
      input.focus();

      input.addEventListener('input', () => {
        localStorage.setItem('newDesc', JSON.stringify(input.value));
      });

      /* Save edit when lose focus */
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

      /* Saves edit when pressing enter key */
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

  // Delete tasks //
  const deleteIcon = document.querySelectorAll('.task-delete');
  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      const taskID = e.target.parentNode.parentNode.id.replace('task-', '');
      tasks.removeTask(taskID);
      renderTasks(tasks.getTasks());
    });
  });

  // Complete tasks //
  const currentStatus = document.querySelectorAll('.task-complete');
  currentStatus.forEach((chkBox) => {
    chkBox.addEventListener('click', (e) => {
      const taskID = e.target.parentNode.id.replace('task-', '');
      tasks.updateStatus(taskID, chkBox.checked);
      renderTasks(tasks.getTasks());
    });
  });
};

// Add new task //
const dataEntryForm = document.querySelector('.inputField');
dataEntryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const entryField = document.querySelector('.task-entry');
  tasks.addTask(entryField.value);
  entryField.value = '';
  renderTasks(tasks.getTasks());
});
renderTasks(tasks.getTasks());