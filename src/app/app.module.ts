import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAddComponent } from './todo-add/todo-add.component';
import {MatInputModule,MatCardModule,MatButtonModule} from '@angular/material'
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {FormsModule} from '@angular/forms'
import {FlexLayoutModule}from '@angular/flex-layout';
import { TodoListComponent } from './todo-list/todo-list.component'
import {TodoListService} from './todo-list.service'
import {ReactiveFormsModule} from '@angular/forms'
import{DateAgoPipe} from './date-ago.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { TodoSummaryComponent } from './todo-summary/todo-summary.component'
@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    DateAgoPipe,
    TodoSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
