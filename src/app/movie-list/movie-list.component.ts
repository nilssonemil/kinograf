import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie'
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[]


  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onMovieClick(movieId: string) {
    this.searchService.searchMovie(movieId).subscribe(
      data => {
        console.debug(data)
        this.selectedMovie = data
      },
      error => console.error(error)
    )
  }
}
