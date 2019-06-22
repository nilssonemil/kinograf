import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gpl from 'graphql-tag'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Movie } from './movie';
import { MovieByTitleResult } from './movie-by-title-result';
import { ApolloQueryResult } from 'apollo-client';
import { MovieByIdResult } from './movie-by-id-result';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  private titleQuery = gpl`
    query($title:String) {
      movie_by_title(title: $title) {
        title
        imdb_id
        poster
        imdb_rating
      }
    }`

  private idQuery = gpl`
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
    }`

  constructor(private apollo: Apollo) { }

  searchTitle(title: string): Observable<Movie[]> {
    console.log("GraphQL search title", title)
    return this.apollo.query<MovieByTitleResult<Movie[]>>({
      query: this.titleQuery,
      variables: {
        title: title
      }
    }).pipe(map((res: ApolloQueryResult<MovieByTitleResult<Movie[]>>) =>
                  res.data.movie_by_title))
  }

  searchId(id: string): Observable<Movie> {
    console.log("GraphQL search id", id)
    return this.apollo.query<MovieByIdResult<Movie>>({
      query: this.idQuery,
      variables: {
        id: id,
      }
    }).pipe(map((res: ApolloQueryResult<MovieByIdResult<Movie>>) =>
                  res.data.movie_by_id))
  }
}
