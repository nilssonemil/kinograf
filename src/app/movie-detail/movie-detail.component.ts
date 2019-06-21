import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../movie';
import { IMDbService } from '../imdb.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnChanges, OnInit {

  @Input() movie: Movie
  @Input() hidden: boolean

  constructor(private imdb: IMDbService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.movie = changes["movie"].currentValue

    this.hidden = this.movie == null
  }

  hasWebsite(): boolean {
    return this.movie.Website != null && this.movie.Website != "N/A"
  }
}
