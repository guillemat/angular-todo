import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { UsersComponent } from './components/users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersService } from './services/users.service';
import { UsersTasksComponent } from './components/users-tasks/users-tasks.component';
import { TodosService } from './services/todos.service';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users-tasks', component: UsersTasksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavComponent,
    AddTodoComponent,
    FiltersComponent,
    UsersComponent,
    UsersTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [
    UsersService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
