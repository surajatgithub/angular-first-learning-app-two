import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output('eventGameStarted') eventGameStarted = new EventEmitter<number>();
  @Output('eventGameStopped') eventGameStopped = new EventEmitter<number>();

  startGameInterval = null;
  countDown = 0;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.startGameInterval = setInterval(() => {
      this.countDown++;
      this.eventGameStarted.emit(this.countDown);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.startGameInterval);
    this.countDown = 0;
    this.startGameInterval = null;
    this.eventGameStopped.emit();
  }
}
