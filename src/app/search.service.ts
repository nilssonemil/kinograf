import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Movie } from './movie'
import { OMDbService } from './omdb/omdb.service';
import { SearchResult } from './search/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private omdb: OMDbService) { }

  searchId(id: string): Observable<Movie> {
    return this.omdb.searchId(id)
  }

  searchTitle(title: string): Observable<SearchResult> {
    return this.omdb.searchTitle(title)
  }

}