import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/interfaces';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  todoCompleted(todo: Todo): void{
    this.todos.map( (element) => {
      if(todo.id === element.id) element.completed = !element.completed
    })
  }


}
