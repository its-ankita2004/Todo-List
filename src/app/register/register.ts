import { Component } from '@angular/core';
import { Auth, AuthResponse } from '../auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [FormsModule, RouterModule],
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth : Auth, private router: Router) {}

  onRegister() {
    this.auth.register(this.email, this.password).subscribe({
      next: (response :  AuthResponse) =>{
        localStorage.setItem('token', response.access_token);
         alert('Registration successful!'),
        this.router.navigate(['/todos']);
      },
      error: (err) => alert('Registration failed: ' + err.error.detail),
    });
  }
}
