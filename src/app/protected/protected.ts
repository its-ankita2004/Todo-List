import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-protected',
  template: `
    <h2>Protected Page</h2>
    <p>{{ message }}</p>
  `,
})
export class ProtectedComponent implements OnInit {
  message = '';

  constructor(private auth: Auth) {}

  ngOnInit() {
   // const token = localStorage.getItem('token');
    // if (token) {
      this.auth.getProtected().subscribe({
        next: (res) => (this.message = res.message),
        error: () => (this.message = 'Access denied'),
      });
    // } else {
    }
  }

