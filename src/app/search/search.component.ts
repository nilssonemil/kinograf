import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchResults: Movie[]

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location,
  ) { }

  ngOnInit() {
    const query = this.route.snapshot.paramMap.get('query')
    if (query != null) {
      this.search(query)
    }
  }

  search(query: string) {
    this.searchService.searchTitle(query).subscribe(
      data => {
        this.searchResults = data
        this.location.replaceState(`/search/${query}`)
      },
      error => console.error(error)
    )
  }
}
