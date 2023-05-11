import { JSDOM } from 'jsdom';
import TaskList from '../modules/taskListClass.js';
import 'jest-localstorage-mock';

describe('Task List', () => {
  let tasksContainer;
  let entryField;
  let dataEntryForm;

  const renderTasks = jest.fn((listOfTasks) => {
    if (listOfTasks.length === 0) {
      tasksContainer.innerHTML = '';
    } else {
      tasksContainer.innerHTML = `
      ${listOfTasks.map((task) => `
        <li class="task" id="task-${task.id}">
          <input class="task-complete" type="checkbox" name="task-status" ${task.completed ? 'checked' : 'unchecked'}>
          <span class="task-desc${task.completed ? ' crossed-out' : ''}">${task.description}</span>
          <div class="icon-swapper">
            <i class="fa-solid fa-ellipsis-vertical task-more"></i>
            <i class="fa-solid fa-eraser task-delete"></i>
          </div>
        </li>`).join('')}`;
    }
  });

  beforeEach(() => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Task List App</title>
        </head>
        <body>
          <form class="inputField">
            <input type="text" id="task-input" class="task-entry">
            <button class="submit" type="submit"></button>
          </form>

          <div class="tasklist-body">
            <ul class="tasks-container"></ul>
          </div>

          <div>
            <button type="button" class="btn clear-all-completed">Clear All Completed</button>
          </div>
        </body>
      </html>
    `);

    global.window = dom.window;
    global.document = dom.window.document;

    tasksContainer = document.querySelector('.tasks-container');
    entryField = document.querySelector('.task-entry');
    dataEntryForm = document.querySelector('.inputField');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders empty task list', () => {
    const tasks = new TaskList();
    renderTasks(tasks.getTasks());

    expect(tasksContainer.innerHTML).toBe('');
  });

  test('adds new li when adding a task', () => {
    const tasks = new TaskList();
    entryField.value = 'New Task';

    dataEntryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      tasks.addTask(entryField.value);
    });

    dataEntryForm.dispatchEvent(new window.SubmitEvent('submit'));
    renderTasks(tasks.getTasks());

    const addedTask = document.getElementById('task-1');
    expect(addedTask).not.toBeNull();
  });

  test('removes correct task from the list when deleting a task', () => {
    const tasks = new TaskList();
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    tasks.addTask('Task 3');
    tasks.addTask('Task 4');
    tasks.removeTask(2);
    renderTasks(tasks.getTasks());

    const task = document.getElementById('task-2');

    expect(task.querySelector('.task-desc').textContent).toBe('Task 3');
  });

  test('removes only one li from the page when deleting a task', () => {
    const tasks = new TaskList();
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    tasks.addTask('Task 3');
    tasks.addTask('Task 4');
    tasks.removeTask(2);
    renderTasks(tasks.getTasks());

    expect(tasksContainer.childElementCount).toBe(3);
  });
});