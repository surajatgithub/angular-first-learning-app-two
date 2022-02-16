import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Assignment1Component implements OnInit {
  constructor() {}

  countDowns: number[] = [];

  ngOnInit(): void {}

  onGameStarted(countDown: number) {
    this.countDowns.push(countDown);
  }

  onGameStopped() {
    this.countDowns = [];
  }
}
