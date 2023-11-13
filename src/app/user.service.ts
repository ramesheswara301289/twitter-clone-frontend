import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from 'src/app/user-profile';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/user'; 

  constructor(private http: HttpClient) { }

  getUserProfile(userId: string): Observable<UserProfile> {
    // Make an API request to fetch a user's profile by userId
    return this.http.get<UserProfile>(`${this.apiUrl}/${userId}`);
  }
}
