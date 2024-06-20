import { Component, Input } from "@angular/core";

import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { type TaskForm } from "./task/task.modal";
import { TasksService } from "./tasks.service";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;
  addNewTask: Boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTaks(this.userId);
  }

  onCompleteTask(id: string) {
    return this.tasksService.removeTask(id);
  }
  showAddTaskForm() {
    this.addNewTask = true;
  }
  hideAddTaskForm() {
    this.addNewTask = false;
  }
}
