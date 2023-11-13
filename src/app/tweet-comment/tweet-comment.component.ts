// tweet-comment.component.ts

import { Component, Input } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-comment',
  templateUrl: './tweet-comment.component.html',
  styleUrls: './tweet-comment.component.css'
})
export class TweetCommentComponent {
  @Input() tweetId: number;
  commentText: string = '';

  constructor(private tweetService: TweetService) {}

  commentTweet() {
    if (this.commentText.trim() !== '') {
      this.tweetService.commentTweet(this.tweetId, this.commentText).subscribe(
        (response) => {
          // Optionally, update the tweet data or UI to reflect the comment action
        },
        (error) => {
          console.error('Error commenting on tweet:', error);
        }
      );
    }
  }
}
