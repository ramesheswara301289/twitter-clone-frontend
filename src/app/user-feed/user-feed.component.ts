// user-feed.component.ts

import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/tweet.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  tweets: Tweet[] | undefined;

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweetService.getUserFeed().subscribe(
      (tweets: Tweet[]) => {
        this.tweets = tweets;
      },
      (error) => {
        console.error('Error fetching user feed:', error);
      }
    );
  }
}
