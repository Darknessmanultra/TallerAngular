import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  profile = { name: '', email: '' };
  message = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.getProfile().subscribe((data) => {
          this.profile = data;
      });
  }

  onSubmit(): void {
      this.userService.updateProfile(this.profile).subscribe((res) => {
          this.message = res.message;
      });
  }
}
