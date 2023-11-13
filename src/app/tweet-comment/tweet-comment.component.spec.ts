import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCommentComponent } from './tweet-comment.component';

describe('TweetCommentComponent', () => {
  let component: TweetCommentComponent;
  let fixture: ComponentFixture<TweetCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetCommentComponent]
    });
    fixture = TestBed.createComponent(TweetCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
