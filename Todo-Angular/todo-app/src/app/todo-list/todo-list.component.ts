import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from "../shared/todo-storage.service";
import { Subscription } from "rxjs";
import { Todo } from "../shared/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit, OnDestroy {

  private todoSub: Subscription;
  todos : Todo[];


  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoSub = this.todoService.todos.subscribe(todos =>{
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
  }

}
