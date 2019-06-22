import { Movie } from './movie';

export interface MovieByTitleResult<T> {
  movie_by_title: Movie[]
}
