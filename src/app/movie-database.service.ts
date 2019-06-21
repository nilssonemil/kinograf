import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './search-result';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDatabaseService {

  private API_KEY = "9a5b1258"
  private BASE_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`

  constructor(private http: HttpClient) { }

  searchTitle(title: string): Observable<Movie[]> {
    const searchUrl = this.BASE_URL + "s=" + title
    console.debug(searchUrl)

    let movies: Movie[] = []

    this.http.get<SearchResult>(searchUrl).subscribe(
      searchResult => {
        searchResult.Search.forEach(
          (movie: Movie) => {
            this.searchMovie(movie.imdbID).subscribe(
              movie => movies.push(movie)
            )
          });
      }
    )
    return of(movies)
  }

  searchMovie(id: string): Observable<Movie> {
    const idUrl = this.BASE_URL + "i=" + id
    console.debug(idUrl)
    return this.http.get<Movie>(idUrl)
  }
}
