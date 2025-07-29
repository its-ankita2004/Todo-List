import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem implements OnInit{
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  
  /**
   *
   */
  constructor() {
  }
      
  ngOnInit(): void{
  }
  onClick(todo: Todo ){
    this.todoDelete.emit(todo);
  }

   onCheckboxClick(todo:Todo){
     this.todoCheckbox.emit(todo);
   }

}
