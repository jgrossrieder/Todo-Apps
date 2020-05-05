import { Component,  Input } from '@angular/core';
import { TodoService } from '../shared/todo-storage.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  onDeleteTodo() {
      console.log(this.todo);
      this
      .todoService
      .delTodo(this.todo.id).subscribe();
  }

}
