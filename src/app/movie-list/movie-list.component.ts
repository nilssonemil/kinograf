import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from '../movie'
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges, OnInit {

  @Input() selectedMovie?: Movie

  @Input() movies: Movie[]

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.selectedMovie = null
  }

  onMovieClick(movie: Movie) {
    this.search.searchMovie(movie.imdb_id).subscribe(
      movie => this.selectedMovie = movie,
      error => console.error(error)
    )
  }

  movieSelected(): boolean {
    return this.selectedMovie != null
  }

  deselectMovie(_hide: boolean) {
    this.selectedMovie = null
  }
}
