export interface Task {
    id: number; // Make id property required
    userId: string;
    taskName: string;
    description: string;
    completed: boolean;
  }