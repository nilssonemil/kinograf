import { Movie } from '../movie';

export interface SearchResult {
  query: string,
  movies: Movie[],
  totalResults?: number,
  error?: string,
}
