import { Injectable, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Movie } from './movie'
import { Apollo } from 'apollo-angular';
import gpl from 'graphql-tag'
import { ApolloQueryResult } from 'apollo-client';
import { MovieByIdResult } from './movie-by-id-result';
import { MovieByTitleResult } from './movie-by-title-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  partialMovieQuery = gpl`
    query($title:String) {
      movie_by_title(title: $title) {
        title
        imdb_id
        poster
        imdb_rating
      }
    }`

  fullMovieQuery = gpl`
    query($id: String) {
      movie_by_id(id: $id) {
        actors
        awards
        box_office
        country
        dvd
        director
        genre
        language
        metascore
        plot
        poster
        production
        rated
        ratings {
          source
          value
        }
        released
        runtime
        title
        type
        website
        writer
        year
        imdb_id
        imdb_rating
        imdb_votes
      }
    }
  `

  constructor(private apollo: Apollo) { }

  searchTitle(title: string): Observable<Movie[]> {
    return this.apollo.query<MovieByTitleResult<Movie[]>>({
      query: this.partialMovieQuery,
      variables: {
        title: title
      }
    }).pipe(map((result: ApolloQueryResult<MovieByTitleResult<Movie[]>>) =>
                  result.data.movie_by_title))
  }

  searchMovie(movieId: string): Observable<Movie> {
    return this.apollo.query<MovieByIdResult<Movie>>({
      query: this.fullMovieQuery,
      variables: {
        id: movieId
      }
    }).pipe(map((result: ApolloQueryResult<MovieByIdResult<Movie>>) =>
                  result.data.movie_by_id))
  }
}
