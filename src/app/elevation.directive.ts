import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  OnChanges,
  Renderer2 as Renderer,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appElevation]'
})
export class ElevationDirective implements OnChanges {

  @Input() restingElevation = 2
  @Input() raisedElevation = 6

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.setElevation(this.restingElevation)
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.setElevation(this.restingElevation)
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setElevation(this.raisedElevation)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setElevation(this.restingElevation)
  }

  setElevation(elevation: number) {
    const elevationPrefix = "mat-elevation-z"
    const classesToRemove = Array.from(
      (<HTMLElement>this.element.nativeElement).classList).filter(
        c => c.startsWith(elevationPrefix))

    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c)
    })

    const newClass = `${elevationPrefix}${elevation}`
    this.renderer.addClass(this.element.nativeElement, newClass)
  }

}
