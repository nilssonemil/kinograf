import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  searchInput = new FormControl('')

  @Output() searched = new EventEmitter<string>()

  constructor() {}

  search() {
    this.searched.emit(this.searchInput.value)
  }

}
