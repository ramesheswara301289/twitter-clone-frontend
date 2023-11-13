import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { TweetFeedComponent } from './tweet-feed/tweet-feed.component';

const routes: Routes = [
  { path: 'user-profiles', component: UserProfileListComponent },
  { path: 'user/:id', component: UserProfileListComponent },
  { path: '', redirectTo: '/user-profiles', pathMatch: 'full' },
  { path: 'tweet-feed', component: TweetFeedComponent },
  { path: '', redirectTo: '/tweet-feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
