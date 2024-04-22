// task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  taskName: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;
}
