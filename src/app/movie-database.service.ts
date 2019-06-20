import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './search-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDatabaseService {

  private API_KEY = "9a5b1258"
  private BASE_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`

  constructor(private http: HttpClient) { }

  searchTitleQuery(title: string): Observable<SearchResult> {
    const searchUrl = this.BASE_URL + "s=" + title
    console.debug(searchUrl)
    return this.http.get<SearchResult>(searchUrl)
  }
}
