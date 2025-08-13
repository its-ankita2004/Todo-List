import { Component, ComponentDecorator } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { RegisterComponent } from "./register/register";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todos, FormsModule, HttpClientModule, LoginComponent, RegisterComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
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
  //  Check immediately on load
  const currentUrl = this.router.url;
  this.isLoginRoute = currentUrl === '/login' || currentUrl === '/register';

  //  Keep listening for changes after that
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isLoginRoute = event.url === '/login' || event.url === '/register';
    }
  });
}
}

