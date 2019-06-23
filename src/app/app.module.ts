import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { MovieComponent } from './movie/movie.component';
import { ElevationDirective } from './elevation.directive';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { RatingComponent } from './rating/rating.component';
import { GraphQLModule } from './graphql.module';
import { AuthInterceptor } from './authentication/auth-interceptor';
import { LoginComponent } from './login/login.component';
import { URLInterceptor } from './urlinterceptor';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HideFocusedPlaceholderDirective } from './hide-focused-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieListComponent,
    SearchTitleComponent,
    MovieComponent,
    ElevationDirective,
    MovieDetailComponent,
    RatingListComponent,
    RatingComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    MenuBarComponent,
    HideFocusedPlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: URLInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
