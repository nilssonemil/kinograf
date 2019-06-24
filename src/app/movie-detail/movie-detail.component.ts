import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Movie } from '../movie';
import { Location } from '@angular/common';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.searchService.searchId(paramMap.get('id')).subscribe(
        movie => this.movie = movie,
        error => {
          console.error(error)
          this.location.back()
        }
      )
    })
    this.searchService.searchId(
      this.route.snapshot.paramMap.get('id')).subscribe(
        movie => this.movie = movie,
        error => {
          console.log(error)
          this.location.back()
        }
    )
  }

  hasWebsite(): boolean {
    return this.movie.website != null &&
           this.movie.website != "N/A"
  }

  back() {
    this.location.back()
  }
}
