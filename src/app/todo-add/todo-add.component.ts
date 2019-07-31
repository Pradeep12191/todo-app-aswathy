import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service'
import { Todo } from '../Todo'
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  private lists: Todo[]
  todoForm: FormGroup;
  constructor(private todolist: TodoListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      task: null,
      delivery: null

    })
  }
  addTask() {
    this.todolist.addTodo(
      {
        task: this.todoForm.value.task,
        delivery: this.todoForm.value.delivery,
        status: 'pending',
        createdDate: new Date().toDateString()
      }

    );
    this.todoForm.reset()
  }
}
