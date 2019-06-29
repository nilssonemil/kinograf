import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResult: SearchResult

  constructor() { }

  ngOnInit() {
  }

}
