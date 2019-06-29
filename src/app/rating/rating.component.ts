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

  iconPath: string

  icons = new Map([
    ['Internet Movie Database', 'assets/imdb-icon.svg.png'],
    ['Rotten Tomatoes', 'assets/rotten-icon.svg.png'],
    ['Metacritic', 'assets/metacritic-icon.svg.png'],
  ])

  constructor(private imdb: IMDbService) { }

  ngOnInit() {
    this.iconPath = this.icons.get(this.rating.source)
  }
}
