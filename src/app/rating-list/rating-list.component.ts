import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {

  @Input() ratings: Rating[]
  @Input() imdbID: string

  constructor() { }

  ngOnInit() {
  }

  isIMDbRating(rating: Rating): boolean {
    return rating.source == "Internet Movie Database"
  }

}
