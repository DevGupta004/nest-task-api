// task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getTasksByUserId(userId: string): Promise<Task[]> {
    return await this.taskRepository.find({ where: { userId } });
  }

  async createTask(task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }
}
