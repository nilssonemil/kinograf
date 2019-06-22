import { OMDbMovie } from './omdb-movie';

export interface OMDbResponse {
  Search: OMDbMovie | OMDbMovie[],
  totalResults: string,
  Reponse: string,
}
