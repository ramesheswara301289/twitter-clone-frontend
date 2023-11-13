import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/tweet.service';
import { Tweet } from 'src/app/tweet.model';

@Component({
  selector: 'app-tweet-feed',
  templateUrl: './tweet-feed.component.html',
  styleUrls: ['./tweet-feed.component.css']
})
export class TweetFeedComponent implements OnInit {
  tweets: Tweet[] | undefined;

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getTweets().subscribe(
      (tweets: Tweet[]) => {
        this.tweets = tweets;
      },
      (error) => {
        console.error('Error fetching tweets:', error);
      }
    );
  }
}
