import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit ='?_limit=5';

  constructor(private  http:HttpClient) { }

  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>('${this.todoUrl}${this.todosLimit}');
  }
}
