export default class TaskList {
  constructor() {
    this.tasksList = JSON.parse(localStorage.getItem('tasksList')) || [];
    this.currentId = this.tasksList.length + 1;
  }

  sortTasks() {
    this.tasksList.sort((a, b) => a.id - b.id);
  }

  saveTasks() {
    localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
  }

  addTask(description, completed = false) {
    const task = {
      id: this.currentId,
      description,
      completed,
    };
    this.tasksList.push(task);
    this.currentId += 1;
    this.saveTasks();
  }

  removeTask(id) {
    if (this.tasksList.length > 1) {
      const deletedId = id;
      this.tasksList.splice(id - 1, 1);
      this.tasksList.forEach((task) => {
        if (task.id > deletedId) {
          task.id -= 1;
        }
      });
    } else { this.tasksList = []; }

    this.currentId -= 1;
    this.saveTasks();
  }

  editTask(id, newDescription) {
    const removedTask = this.tasksList.splice(id - 1, 1)[0];
    this.tasksList.push({
      id: removedTask.id,
      description: newDescription,
      completed: removedTask.completed,
    });
    this.sortTasks();
    this.saveTasks();
  }

  clearCompleted() {
    this.taskslist = this.tasksList.filter((task) => !task.completed);
    let iter = 1;
    this.tasksList.forEach((task) => {
      task.id = iter;
      iter += 1;
    });
  }

  getTasks() {
    return this.tasksList;
  }
}