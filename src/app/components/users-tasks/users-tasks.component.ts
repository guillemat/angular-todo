import { Component, OnInit } from '@angular/core';
import { IUser, Todo } from 'src/app/interfaces/interfaces';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-tasks',
  templateUrl: './users-tasks.component.html',
  styleUrls: ['./users-tasks.component.css']
})
export class UsersTasksComponent implements OnInit {
  users: IUser[] = [];
  todos: Todo[] = [];
  usersSelected: any[] = [];

  constructor(
    private todosServices: TodosService,
    private usersService: UsersService,
  ) {

   }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe( resp => {
      this.users = resp;
    })
    const stringTodos = this.todosServices.getTodos();
    this.todos = stringTodos ? JSON.parse(stringTodos) : [];
  }



  usersNames(): string[] {
    var names : string[] = [];
    this.users.forEach( user => {
      if(user.name != undefined ){
        names.push(user.name);
      }
    })

    return names;
  }

  selectUserElement(e: any, id: number): void{

    let userTodoIndex = this.usersSelected.findIndex( item => {
      return item.id == id
    });

    if(userTodoIndex === -1 ){
      this.usersSelected.push({ id: id, user: e.value })
    } else {
      this.usersSelected[userTodoIndex].user = e.value;
    }
  }

  userCompleted(e: any) {
    let index = this.todos.findIndex( item => item.id == e.id);
    let userTodo = this.usersSelected.find( item => item.id == e.id);

    this.todos[index].completed = !this.todos[index].completed;

    if(userTodo !== undefined){
      this.todos[index].completedFor = userTodo.user;
    }

    this.todosServices.setTodo(this.todos);
  }

}
