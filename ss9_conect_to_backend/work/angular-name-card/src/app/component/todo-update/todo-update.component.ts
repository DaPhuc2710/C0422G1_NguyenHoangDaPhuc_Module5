import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todos: Todo
  todoForm: FormGroup
  id: number

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private route: Router) {
    activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id')
    })
  }

  ngOnInit(): void {
    this.todoService.findById(this.id).subscribe(next => {
     this.todos= next
    },error => {

    },() => {
      this.todoForm=new FormGroup(
        {
          id: new FormControl(this.todos.id),
          name: new FormControl(this.todos.name)
        }
      )
    })

  }

  update() {
    this.todoService.update(this.id,this.todoForm.value).subscribe(next => {
      this.route.navigateByUrl("")
    })
  }
}
