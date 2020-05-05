import { Component, Output, EventEmitter } from "@angular/core";
import { TodoService } from "../shared/todo-storage.service";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"],
})
export class TodoInputComponent {
  todo: string = "";

  constructor(private todoService: TodoService) {}

  onSaveTodo() {
    this.todoService.addTodo(this.todo).subscribe(() => {
      this.todo = "";
    });
  }
}
