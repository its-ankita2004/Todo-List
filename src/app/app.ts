import { Component, ComponentDecorator } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { RegisterComponent } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todos, FormsModule, HttpClientModule, LoginComponent, RegisterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// @NgModule({
//   declarations: [
   
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,  // 👈 Add this line
//   ],
//   providers: [],
//   bootstrap: [Component]
// })
// export class AppModule { }


export class App {
   title = 'Todo-List';
   isLoggedIn = false;
   isAlreasdyRegistered = false;
   isLoginRoute = false;

   constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Adjust the condition to match your login route path exactly
        this.isLoginRoute = (event.url === '/login'|| event.url === '/register')? true : false;
      }
    });
  }
}
// function NgModule(arg0: { declarations: any[]; imports: (typeof BrowserModule)[]; providers: never[]; bootstrap: ComponentDecorator[]; }): (target: typeof AppModule) => void | typeof AppModule {
//   throw new Error('Function not implemented.');
// }

