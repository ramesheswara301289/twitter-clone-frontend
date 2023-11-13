import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationComponent } from './tweet-creation.component';

describe('TweetCreationComponent', () => {
  let component: TweetCreationComponent;
  let fixture: ComponentFixture<TweetCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetCreationComponent]
    });
    fixture = TestBed.createComponent(TweetCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
