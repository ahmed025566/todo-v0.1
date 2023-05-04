import './styles/main.css';

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

const renderTasks = (listOfTasks) => {
  sortTasks(listOfTasks);
  tasksContainer.innerHTML = `
    ${listOfTasks.map((task) => `
      <li class="task dflex">
        <input type="checkbox" name="task-status" id="${task.id}-status">
        ${task.description}
        <i class="fa-solid fa-ellipsis-vertical task-more"></i>
      </li>
    `).join('')
}`;
};

renderTasks(listOfTasks);