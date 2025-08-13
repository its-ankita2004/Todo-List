import { Component, ComponentDecorator, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { RegisterComponent } from "./register/register";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { filter } from 'rxjs';

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


export class App implements OnInit {
   title = 'Todo-List';
   isLoggedIn = false;
   isAlreasdyRegistered = false;
   isLoginRoute = false;
constructor(private router: Router) {}


  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLoginRoute =
          event.urlAfterRedirects.startsWith('/login') ||
          event.urlAfterRedirects.startsWith('/register');
      });
  }
}


