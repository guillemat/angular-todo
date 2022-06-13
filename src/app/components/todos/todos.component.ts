import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Todo } from 'src/app/interfaces/interfaces';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  name: any;
  filter: string = 'Ver Todas';
  todos: Todo[] = [
    {
      id: 1,
      todo: "Tarea 1",
      completed: false
    },
    {
      id: 2,
      todo: "Tarea 2",
      completed: false
    },
    {
      id: 3,
      todo: "Tarea 3",
      completed: true
    },
    {
      id: 4,
      todo: "Tarea 4",
      completed: false
    },
    {
      id: 5,
      todo: "Tarea 5",
      completed: false
    },
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    })
  }

  deleteTodo(todo: Todo): void{
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  maxIdCalc(): number {
    let maxID: number = 0;
    this.todos.forEach((element) => {
      if(element.id > maxID){
        maxID = element.id;
      }
    })
    return maxID + 1
  }

  filterChange($event: any): void{
    this.filter = $event;
  }

  newTodo($event: any) {

    let id: number = this.maxIdCalc();
    this.todos.push({ id: id, todo: $event, completed: false});
  }

  todoCompleted(todo: Todo): void{
    this.todos.map( (element) => {
      if(todo.id === element.id) element.completed = !element.completed
    })
  }

  todosFiltered(): Todo[] {
    if(this.filter === 'Ver Completadas'){
      return this.todos.filter( (todo) => todo.completed === true);
    } else if(this.filter === 'Ver No Completadas') {
      return this.todos.filter( (todo) => todo.completed === false);
    } else {
      return this.todos;
    }
  }



}
