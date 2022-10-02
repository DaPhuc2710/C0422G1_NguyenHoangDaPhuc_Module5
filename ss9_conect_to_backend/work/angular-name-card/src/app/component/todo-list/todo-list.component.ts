import {Component, OnInit} from '@angular/core';
import { Todo} from "../../model/todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo: Todo[] = [];


  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(next => {
      this.todo = next;
    })

  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(next=> {
      this.ngOnInit()
    })

  }
}
