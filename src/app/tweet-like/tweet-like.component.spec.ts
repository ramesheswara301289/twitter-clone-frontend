import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLikeComponent } from './tweet-like.component';

describe('TweetLikeComponent', () => {
  let component: TweetLikeComponent;
  let fixture: ComponentFixture<TweetLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetLikeComponent]
    });
    fixture = TestBed.createComponent(TweetLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
