import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  tarea: string = "";
  @Output() nuevoTodoEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo(){
    if(this.tarea !== '' && this.tarea !== undefined){
      this.nuevoTodoEvent.emit(this.tarea);
      this.tarea = '';
    }
  }


}
