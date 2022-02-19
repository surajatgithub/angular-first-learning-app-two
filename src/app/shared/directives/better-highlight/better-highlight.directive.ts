import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
    // this.renderer.addClass(this.elRef.nativeElement, 'text-warning');
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    // this.renderer.addClass(this.elRef.nativeElement, 'text-danger');
    // this.renderer.removeClass(this.elRef.nativeElement, 'text-warning');
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.removeClass(this.elRef.nativeElement, 'text-danger');
    // this.renderer.addClass(this.elRef.nativeElement, 'text-warning');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
