import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class FancyDirective {
  constructor(private el: ElementRef) {
    // console.log('here we are');
  }
  @Input() defaultColor = 'yellow';
  @Input('myHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  // @HostListener('click', ['$event']) click(event: Event) {
  //   console.log('I got clicked');
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
