import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() selectedMovie?: Movie

  @Input() movies: Movie[]

  constructor() { }

  ngOnInit() {
  }

  onMovieClick(movie: Movie) {
    this.selectedMovie = movie
  }

  movieSelected(): boolean {
    return this.selectedMovie != null
  }

  deselectMovie(_hide: boolean) {
    this.selectedMovie = null
  }
}
