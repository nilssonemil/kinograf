import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot-card',
  templateUrl: './plot-card.component.html',
  styleUrls: ['./plot-card.component.scss']
})
export class PlotCardComponent implements OnInit {

  @Input() plot: string

  constructor() { }

  ngOnInit() {
  }

}
