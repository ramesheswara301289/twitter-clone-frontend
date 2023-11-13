import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/user-profile.service';
import { UserProfile } from 'src/app/user-profile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {
  userProfiles: UserProfile[] | undefined;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.userProfileService.getAllUserProfiles().
    this.userProfileService.getAllUserProfiles().subscribe(
      (profiles: UserProfile[]) => {
        this.userProfiles = profiles;
      },
      (error : any) => {
        console.error('Error fetching user profiles:', error);
      }
    );
  }

  followUser(userId: number) {
    this.userProfileService.followUser(userId).subscribe(
      () => {
        // Handle the success of following the user (e.g., update UI)
      },
      (error) => {
        console.error('Error following user:', error);
        // Handle the error (e.g., show an error message)
      }
    );
  }

  unfollowUser(userId: number) {
    this.userProfileService.unfollowUser(userId).subscribe(
      () => {
        // Handle the success of unfollowing the user (e.g., update UI)
      },
      (error) => {
        console.error('Error unfollowing user:', error);
        // Handle the error (e.g., show an error message)
      }
    );
  }
}
