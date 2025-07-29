import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo } from '../../Todo';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule, MatInputModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo {

  title: string = "";
  desc: string = "";
  submitInvalid: boolean = false;
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @ViewChild('addTodoForm') addTodoForm!: NgForm;



  constructor() {

  }
onsubmit() {
  console.log(this.addTodoForm);
  // If no field is touched and button is pressed
  if (
    !this.addTodoForm.controls['title']?.touched &&
    !this.addTodoForm.controls['desc']?.touched
  ) {
    this.submitInvalid = true;

    // Mark all as touched to show errors
    Object.values(this.addTodoForm.controls).forEach(control =>
      control.markAsTouched()
    );
    return;
  }

  // If any field is invalid
  if (
    this.addTodoForm.controls['title']?.invalid ||
    this.addTodoForm.controls['desc']?.invalid
  ) {
    this.submitInvalid = true;
    return;
  }

  this.submitInvalid = false;

  const newTodo: Todo = {
    sno: Math.floor(Math.random() * 10000),
    title: this.title,
    desc: this.desc,
    active: true,
  };
  this.todoAdd.emit(newTodo);
  this.addTodoForm.resetForm();
}

}
