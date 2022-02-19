import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isDropdownOpen: boolean = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleDropdown(event: Event) {
    if (this.isDropdownOpen) {
      this.renderer.removeClass(
        this.elRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    } else {
      this.renderer.addClass(
        this.elRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    }
	
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
