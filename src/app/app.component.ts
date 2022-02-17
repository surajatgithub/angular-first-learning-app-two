import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Suraj';
  activePageName: string = 'recipe';

  onPageSelected(pageName) {
    this.activePageName = pageName;
  }
}
