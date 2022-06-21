import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  users: IUser[] = [];
  dataSource = this.users;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( resp => {
      this.users = resp;
    })
  }


}
