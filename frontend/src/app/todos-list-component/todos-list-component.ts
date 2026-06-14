import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-list-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos-list-component.html',
  styleUrl: './todos-list-component.css',
})
export class TodosListComponent implements OnInit {
  // todos = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Become expert at Angular', false, new Date()),
  //   new Todo(3, 'Become expert at Java', false, new Date()),
  //   new Todo(4, 'Become expert at Spring Boot', false, new Date()),
  //   new Todo(5, 'Become developper', false, new Date()),
  // ];

  message: string = '';

  constructor(private todoService: TodoData, private router: Router) {}
  todos: Todo[] = [];
  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retrieveAllTodos('amal').subscribe((response) => (this.todos = response));
  }

  deleteTodo(username: string, id: number) {
    this.todoService.deleteTodo(username, id).subscribe((response) => {
      console.log(response),
        (this.message = `Delete of Todo ${id} Successful!`),
        this.refreshTodos();
    });
  }

  updateTodo(username: string, id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
