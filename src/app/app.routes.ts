import { Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { PagenotfoundComponent } from './others/pagenotfound/pagenotfound.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './auth/users/users.component';

export const routes: Routes = [
  // Default Path
  {
    path: '', redirectTo: 'signup', pathMatch: 'full'
  },
  {
    path: 'youtube', component: YoutubeComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  // Wild Card Route for 404 request
  {
    path: '**', component: PagenotfoundComponent
  }
];
