import { Movie } from './movie'

export interface SearchResult {
    Response: string,
    totalResults: string,
    Search: Movie[]
}
