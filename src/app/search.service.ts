import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { MovieDatabaseService } from './movie-database.service';
import { Movie } from './movie'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private movieDatabaseService: MovieDatabaseService) { }

  searchTitle(title: string): Observable<Movie[]> {
    return this.movieDatabaseService.searchTitle(title)
  }

  searchMovie(movieId: string): Observable<Movie> {
    return this.movieDatabaseService.searchMovie(movieId)
  }
}
