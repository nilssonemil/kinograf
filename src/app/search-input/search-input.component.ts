import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map, tap, debounceTime } from 'rxjs/operators';
import { Observable, from, of, empty } from 'rxjs'
import { Movie } from '../movie';
import { SearchService } from '../search.service';

const SEARCH_DELAY = 200
const SEARCH_HISTORY = 'search-history'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchInput = new FormControl('')

  @Output() searched = new EventEmitter<string>()

  cachedSearches: string[]

  filteredSearches: Observable<string[]>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.cachedSearches = this.loadSearchHistory()

    this.filteredSearches = this.searchInput.valueChanges.pipe(
      debounceTime(SEARCH_DELAY),
      startWith(''),
      map((value: string) => {
        if (value.length < 1)
          return [] // let them do some typing
        return this._filter(value)
      }),
      tap(value => {
        this.emitSearch()
      }),
    )
  }

  saveToSearchHistory(search: string) {
    const history = this.loadSearchHistory()
    if (!history.includes(search.toLowerCase())) {
      history.push(search.toLowerCase())
      localStorage.setItem(
        SEARCH_HISTORY,
        JSON.stringify(history))
    }
  }

  loadSearchHistory(): string[] {
    const history = localStorage.getItem(SEARCH_HISTORY)
    return JSON.parse(history) || []
  }

  emitSearch() {
    const searchedValue = this.searchInput.value
    if (searchedValue.length > 0) {
      this.searched.emit(searchedValue)
      this.saveToSearchHistory(searchedValue)
    }
  }

  private _filter(value: string): string[] {
    return this.cachedSearches.filter(
      search => search.includes(value.toLowerCase())
    )
  }
}
