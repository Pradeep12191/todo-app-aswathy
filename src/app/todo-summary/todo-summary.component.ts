import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service'
import {Todo} from '../Todo'
@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.scss']
})
export class TodoSummaryComponent implements OnInit {
  private todos:Todo[];
  constructor(private todoservice:TodoListService) { }

  ngOnInit() {
    this.todos=this.todoservice.getTodos()
  }
  filterdo(status)
  {
   return this.todos.filter((todo)=> todo.status===status)
  }

}
