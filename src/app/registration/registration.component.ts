import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Custom validator function for password confirmation
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { passwordsNotMatch: true };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationError: string | null = null; // To store registration error messages

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      FirstName: ['', [Validators.required]], // Add FirstName field and validation
      LastName: ['', [Validators.required]],  // Add LastName field and validation
      birthDate: ['', [Validators.required]],  // Add birthDate field and validation
      profilePictureUrl: [''], // Add profilePictureUrl field (optional)
      bio: [''], // Add bio field (optional)
    }, {
      validators: [passwordMatchValidator], // Apply the custom validator for password confirmation
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Create an object to send to your API (adjust this structure to match your API's expectations)
      const registrationData = {
        Email: formData.email,
        Password: formData.password,
        ConfirmPassword: formData.confirmPassword,
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        BirthDate: formData.birthDate,
        ProfilePictureUrl: formData.profilePictureUrl,
        Bio: formData.bio,
      };
      
      // Send registrationData to your API using Angular's HttpClient
      this.http.post('YOUR_API_URL/api/user/register', registrationData).subscribe(
        (response: any) => {
          // Registration was successful, handle the response, e.g., redirect to a login page
          console.log('Registration successful:', response);
        },
        (error) => {
          // Handle registration error, e.g., display an error message
          this.registrationError = 'Registration failed. Please try again later.';
          console.error('Registration error:', error);
        }
      );
    }
  }
}
