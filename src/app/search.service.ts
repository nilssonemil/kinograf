import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { MovieDatabaseService } from './movie-database.service';
import { SearchResult } from './search-result';
import { Movie } from './movie'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private movieDatabaseService: MovieDatabaseService) { }

  searchTitle(title: string): Observable<Movie[]> {
    return this.movieDatabaseService.searchTitleQuery(title).pipe(
      map((data: SearchResult): Movie[] => data.Search)
    )
  }
}
