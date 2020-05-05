import { Subject, BehaviorSubject, concat, of } from "rxjs";
import { take, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Todo } from "./todo";
import * as uuid from "uuid";

@Injectable()
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>([]);

  addTodo(todoText: string) {
    const id = uuid.v4();
    const todo = new Todo(id, todoText);
    return this.todos.pipe(
      take(1),
      tap((todos) => {
        this._todos.next(todos.concat(todo));
      })
    );
  }

  delTodo(todoId: any) {
    return this.todos.pipe(
      take(1),
      tap((todos) => {
        this._todos.next(todos.filter((t) => t.id !== todoId));
      })
    );
  }

  get todos() {
    return this._todos.asObservable();
  }
}
