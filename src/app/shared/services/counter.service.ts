import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() {
    console.log('CounterService: Loaded');
  }

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter: ', this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('inactiveToActiveCounter: ', this.inactiveToActiveCounter);
  }
}
