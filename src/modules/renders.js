/* DOM */
const tasksContainer = document.querySelector('.tasks-container');

/* RENDERS */
const renderTasks = (tasks, listOfTasks) => {
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

  const deleteIcon = document.querySelectorAll('.task-delete');
  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      console.log('click');
      e.preventDefault();
      const taskID = e.target.parentNode.parentNode.id.replace('task-', '');
      console.log(taskID);
      tasks.removeTask(taskID);
      renderTasks(tasks.getTasks());
    });
  });
};

export default renderTasks;