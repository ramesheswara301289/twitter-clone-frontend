// tweet-detail.component.ts

import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet.model'; // Import your Tweet model

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent {
  @Input() tweet: Tweet; // Assuming you have a Tweet model

  constructor() {}
}
