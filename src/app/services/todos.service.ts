import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  setTodo(todos: Todo[]): void{
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodos() {
    return localStorage.getItem('todos');
  }
}
