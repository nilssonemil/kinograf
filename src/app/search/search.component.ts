import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchResults: Movie[]

  constructor(private searchService: SearchService) { }

  ngOnInit() {}

  onSearch(title: string) {
    this.searchService.searchTitle(title).subscribe(
      data => {
        console.debug(data)
        this.searchResults = data
      },
      error => console.error(error)
    )
  }
}
