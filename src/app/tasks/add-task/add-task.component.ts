import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { type TaskForm } from "../task/task.modal";

@Component({
  selector: "app-add-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./add-task.component.html",
  styleUrl: "./add-task.component.css",
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskForm>();

  enteredTitle = "";
  enteredSumary = "";
  enterdDueDate = "";

  submitForm() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSumary,
      dueDate: this.enterdDueDate,
    });
  }

  onCancel() {
    this.cancel.emit();
  }
}
