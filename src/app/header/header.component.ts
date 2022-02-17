import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('pageSelected') pageSelected = new EventEmitter<string>();

  lastPageName: string = '';

  constructor() {
    console.log('I am header component!');
  }

  onPageSelect(pageName: string, event) {
    if (this.lastPageName != pageName) {
      this.pageSelected.emit(pageName);
      this.lastPageName = pageName;
    }
  }
}