import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Movie } from '../movie';
import { OMDbMovie } from './omdb-movie';
import { OMDbRating } from './omdb-rating';
import { Rating } from '../rating';
import { OMDbResponse } from './omdb-response';
import { of } from 'zen-observable';
import { SearchResult } from '../search/search-result';

@Injectable({
  providedIn: 'root'
})
export class OMDbService {

  constructor(private http: HttpClient) { }

  searchTitle(title: String): Observable<SearchResult> {
    console.debug("OMDb search title:", title)
    return this.http.get<OMDbResponse>("omdb/s=" + title).pipe(
      map(response => {
        if (response.Response == "False") {
          return {
            query: title,
            error: response.Error,
            totalResults: 0,
            movies: [],
          } as SearchResult
        } else {
          return {
            query: title,
            error: response.Error,
            totalResults: Number(response.totalResults),
            movies: (response.Search as OMDbMovie[]).map(
              (movie => this.normalizeMovie(movie))
            ),
          } as SearchResult
        }
      }
      )
    )
  }

  searchId(id: String): Observable<Movie> {
    console.debug("OMDb search id:", id)
    return this.http.get<OMDbMovie>("omdb/i=" + id + "&plot=full").pipe(
      map((movie: OMDbMovie) => this.normalizeMovie(movie as OMDbMovie)))
  }

  normalizeMovie(omdbMovie: OMDbMovie): Movie {
    let ratings = null
    if (omdbMovie.Ratings != null)
      ratings = omdbMovie.Ratings.map(
        (rating: OMDbRating) => this.normalizeRating(rating))

    return {
      actors: omdbMovie.Actors,
      awards: omdbMovie.Awards,
      box_office: omdbMovie.BoxOffice,
      country: omdbMovie.Country,
      dvd: omdbMovie.DVD,
      director: omdbMovie.Director,
      genre: omdbMovie.Genre,
      language: omdbMovie.Language,
      metascore: omdbMovie.Metascore,
      plot: omdbMovie.Plot,
      poster: omdbMovie.Poster,
      production: omdbMovie.Production,
      rated: omdbMovie.Rated,
      ratings: ratings,
      released: omdbMovie.Released,
      runtime: omdbMovie.Runtime,
      title: omdbMovie.Title,
      type: omdbMovie.Type,
      website: omdbMovie.Website,
      writer: omdbMovie.Writer,
      year: omdbMovie.Year,
      imdb_id: omdbMovie.imdbID,
      imdb_rating: omdbMovie.imdbRating,
      imdb_votes: omdbMovie.imdbVotes,
    } as Movie
  }

  normalizeRating(omdbRating: OMDbRating): Rating {
    return {
      source: omdbRating.Source,
      value: omdbRating.Value
    } as Rating
  }
}
