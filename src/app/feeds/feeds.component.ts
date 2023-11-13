// feed.component.ts

import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedComponent {
  tweets: Tweet[] | undefined; // Assuming you have a Tweet model
  // Other properties and methods...

  constructor(private tweetService: TweetService) {
    // Fetch tweets from the service or wherever you store them
    this.tweets = this.tweetService.getTweets(); // Modify based on your actual method
  }
}
