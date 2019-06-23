import {
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHideFocusedPlaceholder]'
})
export class HideFocusedPlaceholderDirective {

  private placeholderText: string

  constructor(
    private element: ElementRef,
  ) {
    this.placeholderText = this.element.nativeElement.placeholder

    // Hide in case we start focused
    if (this.element.nativeElement === document.activeElement)
      this.hidePlaceholder(true)
  }

  @HostListener('focus')
  onFocus() {
    this.hidePlaceholder(true)
  }

  @HostListener('blur')
  onblur() {
    this.hidePlaceholder(false)
  }

  hidePlaceholder(hide: boolean) {
    this.element.nativeElement.placeholder = hide? "" : this.placeholderText
  }

}
