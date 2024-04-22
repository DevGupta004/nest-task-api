// task.controller.ts
import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.interface'; // Import Task interface

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':userId')
  async getTasksByUserId(@Param('userId') userId: string): Promise<Task[]> {
    return await this.taskService.getTasksByUserId(userId);
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> { // Use Task interface here
    return await this.taskService.createTask(task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.taskService.deleteTask(id);
  }
}
