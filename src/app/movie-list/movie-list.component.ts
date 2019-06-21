import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges, OnInit {

  @Input() selectedMovie?: Movie

  @Input() movies: Movie[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.selectedMovie = null
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
