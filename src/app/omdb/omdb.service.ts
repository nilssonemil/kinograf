import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../movie';
import { OMDbMovie } from './omdb-movie';
import { OMDbRating } from './omdb-rating';
import { Rating } from '../rating';
import { OMDbResponse } from './omdb-response';

@Injectable({
  providedIn: 'root'
})
export class OMDbService {

  private OMDB_API_KEY: string = "9a5b1258"
  private OMDB_BASE_URL: string =
    `http://omdbapi.com/?apikey=${this.OMDB_API_KEY}&`

  constructor(private http: HttpClient) { }

  searchTitle(title: String): Observable<Movie[]> {
    console.debug("OMDb search title:", title)
    return this.http.get<OMDbResponse>(
      this.OMDB_BASE_URL + "s=" + title).pipe(map(
        (res: OMDbResponse) => (res.Search as OMDbMovie[]).map(
          (movie: OMDbMovie) => this.normalizeMovie(movie))))
  }

  searchId(id: String): Observable<Movie> {
    console.debug("OMDb search id:", id)
    return this.http.get<OMDbMovie>(
      this.OMDB_BASE_URL + "i=" + id + "&plot=full").pipe(
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
