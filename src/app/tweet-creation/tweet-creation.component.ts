// tweet-creation.component.ts

import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/tweet.service';

@Component({
  selector: 'app-tweet-creation',
  templateUrl: './tweet-creation.component.html',
  styleUrls: ['./tweet-creation.component.css']
})
export class TweetCreationComponent implements OnInit {
  tweetContent: string = '';

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.tweetContent.trim() !== '') {
      const newTweet = {
        content: this.tweetContent,
        // Add other properties as needed
      };

      this.tweetService.createTweet(newTweet).subscribe(
        (createdTweet) => {
          // Optionally, update the tweet feed with the new tweet in real-time
        },
        (error) => {
          console.error('Error creating tweet:', error);
        }
      );

      // Clear the input field after posting the tweet
      this.tweetContent = '';
    }
  }
}
