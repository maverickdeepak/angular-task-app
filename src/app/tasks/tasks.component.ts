import { Component, Input } from "@angular/core";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input() name: string | undefined;
}
