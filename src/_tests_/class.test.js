import TaskList from '../modules/taskListClass.js';
import 'jest-localstorage-mock';

describe('TaskList', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskList();
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('addTask', () => {
    test('should add a new task to the task list', () => {
      taskList.addTask('Task 1');
      expect(taskList.getTasks()).toEqual([{ id: 1, description: 'Task 1', completed: false }]);
    });

    test('should increment the currentId property', () => {
      taskList.addTask('Task 1');
      taskList.addTask('Task 2');
      expect(taskList.currentId).toBe(3);
    });

    test('should save the task list to local storage after adding a task', () => {
      taskList.addTask('Task 1');
      expect(JSON.parse(localStorage.getItem('tasksList'))).toEqual([{ id: 1, description: 'Task 1', completed: false }]);
    });
  });

  describe('removeTask', () => {
    test('should remove a task from the task list', () => {
      taskList.addTask('Task 1');
      taskList.addTask('Task 2');
      taskList.removeTask(1);
      expect(taskList.getTasks()).toEqual([{ id: 1, description: 'Task 2', completed: false }]);
    });

    test('should decrement the currentId property', () => {
      taskList.addTask('Task 1');
      taskList.addTask('Task 2');
      taskList.removeTask(1);
      expect(taskList.currentId).toBe(2);
    });

    test('should save the task list to local storage after removing a task', () => {
      taskList.addTask('Task 1');
      taskList.removeTask(1);
      expect(JSON.parse(localStorage.getItem('tasksList'))).toEqual([]);
    });
  });

  describe('editTask', () => {
    test('should edit the description of a task', () => {
      taskList.addTask('Task 1');
      taskList.editTask(1, 'Task 3');
      expect(taskList.getTasks()).toEqual([{ id: 1, description: 'Task 3', completed: false }]);
    });
  });

  describe('updateStatus', () => {
    test('should update the completed status of a task', () => {
      taskList.addTask('Task 1');
      taskList.updateStatus(1, true);
      expect(taskList.getTasks()).toEqual([{ id: 1, description: 'Task 1', completed: true }]);
    });
  });

  describe('clearCompleted', () => {
    test('should remove all completed tasks from the task list', () => {
      taskList.addTask('Task 1');
      taskList.addTask('Task 2', true);
      taskList.addTask('Task 3');
      taskList.addTask('Task 4', true);
      taskList.clearCompleted();
      expect(taskList.getTasks()).toEqual([{ id: 1, description: 'Task 1', completed: false }, { id: 2, description: 'Task 3', completed: false }]);
    });
  });
});
