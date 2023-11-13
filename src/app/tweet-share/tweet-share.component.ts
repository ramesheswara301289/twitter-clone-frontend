// tweet-share.component.ts

import { Component, Input } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-share',
  templateUrl: './tweet-share.component.html',
  styleUrls: './tweet-share.component.css'
})
export class TweetShareComponent {
  @Input() tweetId: number;

  constructor(private tweetService: TweetService) {}

  shareTweet() {
    this.tweetService.shareTweet(this.tweetId).subscribe(
      (response) => {
        // Optionally, update the tweet data or UI to reflect the share action
      },
      (error) => {
        console.error('Error sharing tweet:', error);
      }
    );
  }
}
