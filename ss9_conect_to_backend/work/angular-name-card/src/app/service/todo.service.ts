import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todo')
  }

  addTodo(todo: Todo) {
    return this.http.post('http://localhost:3000/todo', todo)
  }

  deleteTodo(id: number) {
    return this.http.delete('http://localhost:3000/todo/' + id)
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3000/todo/' + id)
  }

  update(id: number, todo: Todo) {
    return this.http.put('http://localhost:3000/todo/' + id, todo)
  }

}
