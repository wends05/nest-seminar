import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { UserDocument } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('updateJP/:name')
  updateJP(@Param('name') name: string) {
    return this.usersService.updateJP({
      name,
      email: 'jp@naver.com',
      password: '1234',
    });
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.getById(id);
  }

  @Post()
  create(@Body() user: UserDocument) {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UserDocument) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
