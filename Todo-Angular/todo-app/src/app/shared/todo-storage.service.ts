import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {

    private todoSubjectIndex = new Subject<number>();
    public todoObserverIndex = this.todoSubjectIndex.asObservable();

    changeTodo(todoIndex: number) {
        this.todoSubjectIndex.next(todoIndex);
    }
}
