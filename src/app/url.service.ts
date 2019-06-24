import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  private OMDB_API_KEY: string = "9a5b1258"
  private API_URLS = new Map([
    ['kinograf', 'http://localhost:3000/api'],
    ['omdb', `http://omdbapi.com/?apikey=${this.OMDB_API_KEY}&`],
  ])

  constructor() { }

  getURL(api: string): string {
    return this.API_URLS.get(api)
  }

  isOMDbRequest(req: HttpRequest<any>): boolean {
    return req.url.startsWith(this.API_URLS.get('omdb')) ||
           req.url.startsWith('omdb')
  }
}
