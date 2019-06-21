import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IMDbService {

  constructor() { }

  getIMDbURL(imdbID: string): string {
    return "https://www.imdb.com/title/" + imdbID
  }
}
