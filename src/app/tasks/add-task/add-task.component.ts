import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-add-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./add-task.component.html",
  styleUrl: "./add-task.component.css",
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = "";
  enteredSumary = "";
  enterdDueDate = "";

  constructor(private tasksService: TasksService) {}

  submitForm() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSumary,
        dueDate: this.enterdDueDate,
      },
      this.userId
    );
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
