import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  constructor(private todoService: TodoService, private route: Router) {
  }

  ngOnInit(): void {
  }

  posting() {
    this.todoService.addTodo(this.todoForm.value).subscribe(next => {
      this.route.navigateByUrl('')
    })
  }
}
