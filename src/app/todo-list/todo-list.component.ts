import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service'
import {Todo} from '../Todo'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private lists:Todo[];
  statusList = [
    {display: 'Pending', value: 'pending'},
    {display: 'Doing', value: 'doing'},
    {display: 'Completed', value: 'completed'},
  ];
  sortDirection;
  sortHeader;
  statusSortOrder = ['completed', 'doing', 'pending']
  headers = [
    { name: 'TIME', sortDirection: '', labelFlex: 15 },
    { name: 'DELIVERY', sortDirection: '', labelFlex: 15 },
    { name: 'STATUS', sortDirection: '', labelFlex: 10 },
]

  constructor(private todolist:TodoListService) { }

  ngOnInit() {
    this.lists =this.todolist.getTodos()
  }
  deleteImage(index)
  {
    this.lists.splice(index, 1);
  }
  drop(event:CdkDragDrop<string[]>)
  {
moveItemInArray(this.lists,event.previousIndex,event.currentIndex);
  }
sort(header)
{
  if(this.sortHeader)
  {
    if(this.sortHeader===header)
    {
      header.sortDirection=header.sortDirection==='asc'?'desc':'asc'
    }
    else{
      this.sortHeader.sortDirection=''
      header.sortDirection='asc'
    }
  }
    else{
      header.sortDirection='asc'
    }
    if(header.sortDirection==='asc')
    {
      if(header.name==='TIME')
      {
        this.lists.sort((a, b) => {
          const date1 = +new Date(a.createdDate);
          const date2 = +new Date(b.createdDate);
          return date1 - date2;
      })
      }
      if(header.name==='STATUS')
{
  this.lists.sort((a, b) => {
  
return this.statusSortOrder.indexOf(a.status) - this.statusSortOrder.indexOf(b.status)
  })
}
    }
 
else
{
  if (header.name === 'TIME') {
    this.lists.sort((a, b) => {
        const date1 = +new Date(a.createdDate);
        const date2 = +new Date(b.createdDate);
        return date2 - date1;
    })
}
if (header.name === 'STATUS') {
    this.lists.sort((a, b) => {
        return this.statusSortOrder.indexOf(b.status) - this.statusSortOrder.indexOf(a.status)
    })
}
}
this.sortHeader = header;
}

}
