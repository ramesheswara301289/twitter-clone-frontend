import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetShareComponent } from './tweet-share.component';

describe('TweetShareComponent', () => {
  let component: TweetShareComponent;
  let fixture: ComponentFixture<TweetShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetShareComponent]
    });
    fixture = TestBed.createComponent(TweetShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
