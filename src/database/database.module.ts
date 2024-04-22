// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../task/task.entity';
import { TaskService } from '../task/task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '194.163.35.1',
      port: 3306, // Default MySQL port
      username: 'u287158188_pro_focus',
      password: 'Dk555666@',
      database: 'u287158188_pro_focus',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Auto create tables based on entities (only for development)
    }),
  ],
  providers: [TaskService],
  exports: [TaskService, TypeOrmModule], 
})
export class DatabaseModule {}
