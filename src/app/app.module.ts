import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { FormControl, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { FeedsComponent } from './feeds/feeds.component';
import { TweetFeedComponent } from './tweet-feed/tweet-feed.component';
import { TweetCreationComponent } from './tweet-creation/tweet-creation.component';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { TweetLikeComponent } from './tweet-like/tweet-like.component';
import { TweetCommentComponent } from './tweet-comment/tweet-comment.component';
import { TweetShareComponent } from './tweet-share/tweet-share.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserProfileComponent,
    ProfileEditComponent,
    UserProfileListComponent,
    FeedsComponent,
    TweetFeedComponent,
    TweetCreationComponent,
    UserFeedComponent,
    TweetLikeComponent,
    TweetCommentComponent,
    TweetShareComponent,
    TweetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
