import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginForm: FormGroup; // Make sure the name matches what you're using in your template

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // Now you can send formData to your login API using Angular's HttpClient
      // Example:
      // this.authService.loginUser(formData).subscribe(
      //   (response) => {
      //     // Login was successful, handle the response
      //   },
      //   (error) => {
      //     // Handle login error
      //   }
      // );
    }
  }
}
