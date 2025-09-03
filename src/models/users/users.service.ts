import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll() {
    const users = this.userModel.find();
    return users;
  }

  getById(id: string) {
    return this.userModel.findById(id);
  }

  createUser(user: User) {
    return this.userModel.create(user);
  }

  updateJP(user: User) {
    if (user.name == 'JP') {
      return this.userModel.updateOne({ name: 'JP' }, { name: 'Jin Doe' });
    }
  }

  updateUser(id: string, user: User) {
    return this.userModel.updateOne({ _id: id }, user);
  }

  deleteUser(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
