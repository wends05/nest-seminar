import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
import Task from './task.type';
// import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  // constructor(
  //   @InjectModel(Task.name)
  //   private readonly taskModel: Model<Task>,
  // ) {}

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

  // getAllTasks() {
  //   return this.taskModel.find();
  // }

  // createTask(task: TaskDocument) {
  //   return this.taskModel.create(task);
  // }

  // updateTask(id: string, task: TaskDocument) {
  //   return this.taskModel.updateOne({ _id: id }, task);
  // }

  // deleteTask(id: string) {
  //   return this.taskModel.deleteOne({ _id: id });
  // }

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
