import { Component, OnInit } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Todo } from '../todos-list-component/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css',
})
export class TodoComponent implements OnInit {
  constructor(
    private todoService: TodoData,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: number = 0;
  todo: any;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = new Todo('amal', '', new Date(), false);
    if (this.id !== -1) {
      this.todoService.retrieveTodo('amal', this.id).subscribe(
        (data) => (this.todo = data),
        (error) => console.log(error)
      );
    }
  }

  saveTodo() {
    if (this.id !== -1) {
      this.todoService.updateTodo('amal', this.id, this.todo).subscribe((data) => {
        console.log(data), this.router.navigate(['todos']);
      });
    } else {
      this.todoService.createTodo('amal', this.todo).subscribe((data) => {
        console.log(data), this.router.navigate(['todos']);
      });
    }
  }
}
