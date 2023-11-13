import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  getAllUserProfiles() {
      throw new Error('Method not implemented.');
  }
  private apiUrl = 'api/user';

  constructor(private http: HttpClient) { }

  getUserProfile(userId: string): Observable<UserProfile> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<UserProfile>(url);
  }

  followUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/user/follow/${userId}`;
    // Send a POST request to the backend to follow the user
    return this.http.post(url, null);
  }

  unfollowUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/user/unfollow/${userId}`;
    // Send a DELETE request to the backend to unfollow the user
    return this.http.delete(url);
  }
}
