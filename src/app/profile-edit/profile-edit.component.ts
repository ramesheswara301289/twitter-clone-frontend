import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/user-profile.service'; // Replace with your actual service
import { UserProfile } from 'src/app/user-profile.model'; // Import your user profile model

@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.css']
})
export class ProfileEditingComponent implements OnInit {
  userProfile: UserProfile | undefined; // UserProfile is the interface or class representing your user profile model

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    // You may retrieve the user's ID from the route or other sources
    const userId = '123'; // Replace with the actual user ID

    // Use the user profile service to fetch the user's profile for editing
    this.userProfileService.getUserProfile(userId).subscribe(
      (profile: UserProfile) => {
        this.userProfile = profile;
      },
      (error: any) => {
        // Handle profile fetch error
        console.error('Error fetching user profile for editing:', error);
      }
    );
  }

  onSubmit() {
    // Implement the logic to save the edited profile
  }
}
