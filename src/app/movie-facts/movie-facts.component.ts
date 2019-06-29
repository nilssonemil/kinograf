import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-facts',
  templateUrl: './movie-facts.component.html',
  styleUrls: ['./movie-facts.component.scss']
})
export class MovieFactsComponent implements OnInit {

  @Input() movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
