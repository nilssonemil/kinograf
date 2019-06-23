import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from '../movie'
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[]

  constructor(
    private router: Router,
    private search: SearchService,
  ) {
    this.movies = []
  }

  ngOnInit() {}

  onMovieClick(movie: Movie) {
    this.search.searchId(movie.imdb_id).subscribe(
      movie => this.router.navigate(['/movie', movie.imdb_id]),
      error => console.error(error)
    )
  }
}
