// tweet-like.component.ts

import { Component, Input } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-like',
  templateUrl: './tweet-like.component.html',
  styleUrls: ['./tweet-like.component.css']
})
export class TweetLikeComponent {
  @Input() tweetId: number;

  constructor(private tweetService: TweetService) {}

  likeTweet() {
    this.tweetService.likeTweet(this.tweetId).subscribe(
      (response) => {
        // Optionally, update the tweet data or UI to reflect the like action
      },
      (error) => {
        console.error('Error liking tweet:', error);
      }
    );
  }
}
