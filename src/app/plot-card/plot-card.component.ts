import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot-card',
  templateUrl: './plot-card.component.html',
  styleUrls: ['./plot-card.component.scss']
})
export class PlotCardComponent implements OnInit {

  @Input() plot: string
  @Input() characterLimit: number = 200

  show: boolean = false

  constructor() { }

  ngOnInit() {
    // FIXME: This is not really the limit used, but sets the default
    // value for when the plot should be limited.
    // TODO: ALso hide the show more/less button if the plot is shorter
    // than the limit.
    this.show = this.plot.length < this.characterLimit
  }

}
