import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-add-task",
  standalone: true,
  imports: [],
  templateUrl: "./add-task.component.html",
  styleUrl: "./add-task.component.css",
})
export class AddTaskComponent {
  @Input() hideAddTaskForm: any;
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
