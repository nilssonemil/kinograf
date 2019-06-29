import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { SearchResult } from './search-result'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchResult: SearchResult

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location,
  ) { }

  ngOnInit() {

    // Placeholder results to be displayed
    this.searchResult = {
      error: "Pending search...",
      totalResults: 0,
      movies: [],
    } as SearchResult

    this.route.paramMap.subscribe(paramMap => {
      let query = paramMap.get('query')
      if (query != null) this.search(query)
    })
  }

  search(query: string) {
    this.searchService.searchTitle(query).subscribe(
      result => {
        this.searchResult = result
        this.location.replaceState(`/search/${query}`)
      },
    )
  }
}
