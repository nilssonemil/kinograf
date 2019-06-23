import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'user/:name',
    component: ProfileComponent,
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: '*',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
