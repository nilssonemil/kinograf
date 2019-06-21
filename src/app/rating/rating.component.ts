import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../rating';
import { IMDbService } from '../imdb.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: Rating
  @Input() imdbID?: string

  constructor(private imdb: IMDbService) { }

  ngOnInit() {}

}
