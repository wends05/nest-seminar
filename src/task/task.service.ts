import { Injectable } from '@nestjs/common';
import Task from './task.type';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      name: 'Task 2',
      completed: false,
    },
    {
      id: 3,
      name: 'Task 3',
      completed: false,
    },
    {
      id: 4,
      name: 'Task 4',
      completed: false,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(task: Task) {
    const newTask = {
      ...task,
      id: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, task: Task) {
    const updatedTask = {
      ...task,
      id,
    };
    this.tasks[id] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: number) {
    return this.tasks.splice(id, 1);
  }
}
