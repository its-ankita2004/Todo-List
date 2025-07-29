import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule],

})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  onLogin() {
    this.auth.login(this.email, this.password)
    .subscribe({
      next: (res) => {
        //localStorage.setItem('token', res.access_token);
        alert('Login successful!');
        this.router.navigate(['/todos']);
      },
      error: () => alert('Invalid credentials'),
    });
  }
}

