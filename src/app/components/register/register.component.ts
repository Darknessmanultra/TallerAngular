import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { RUT:'',name: '', birthday:'', email: '', gender:0, password: '' };
  message = '';
  constructor(private authService: AuthService, private router: Router) {}

    onSubmit(): void {
        this.authService.register(this.user).subscribe({
            next: (response) => {
                this.message = 'Registration successful! Redirecting to login...';
                setTimeout(() => this.router.navigate(['/login']), 2000); // Redirect after 2 seconds
            },
            error: (err) => {
                this.message = 'Registration failed. Please try again.';
            },
        });
    }
}
