import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  private apiUrl = 'api/tweet';

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.apiUrl);
  }

  createTweet(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>(this.apiUrl, tweet);
  }

  // Implement additional tweet-related methods as needed
}
