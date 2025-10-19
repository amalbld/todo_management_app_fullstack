import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos-list-component',
  imports: [CommonModule],
  templateUrl: './todos-list-component.html',
  styleUrl: './todos-list-component.css',
})
export class TodosListComponent {
  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Become expert at Angular', false, new Date()),
    new Todo(3, 'Become expert at Java', false, new Date()),
    new Todo(4, 'Become expert at Spring Boot', false, new Date()),
    new Todo(5, 'Become developper', false, new Date()),
  ];
}
