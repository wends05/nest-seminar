import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './models/users/users.module';
import { TaskModule } from './task/task.module';
import { TaskDBModule } from './taskdb/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-seminar'),
    UsersModule,
    TaskModule,
    TaskDBModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
