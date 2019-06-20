import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.scss']
})
export class SearchTitleComponent implements OnInit {
  title = new FormControl('')

  @Output() searched = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searched.emit(this.title.value)
  }
}
