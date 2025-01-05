import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwords = { oldPassword: '', newPassword: '' };
  message = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
      this.userService.changePassword(this.passwords).subscribe((res) => {
          this.message = res.message;
      });
  }
}
