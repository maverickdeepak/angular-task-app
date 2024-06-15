import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from "@angular/core";
import { type User } from "./user.modal";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  // Normal Input decorator
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: Boolean;
  // select = output<string>();

  // Signal Input
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => "assets/users/" + this.avatar());

  // get Normally image path
  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
