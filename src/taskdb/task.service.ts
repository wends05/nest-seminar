import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './task.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  getAllTasks() {
    return this.taskModel.find();
  }

  createTask(task: Task) {
    return this.taskModel.create(task);
  }

  updateTask(id: string, task: Task) {
    return this.taskModel.updateOne({ _id: id }, task);
  }

  deleteTask(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }
}
