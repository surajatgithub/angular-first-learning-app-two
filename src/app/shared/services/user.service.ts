import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers: string[] = ['Suraj', 'Sonu'];
  inActiveUsers: string[] = ['Sumit', 'Rahul', 'Akash'];

  constructor(private counterService: CounterService) {}

  inActivateUser(index: number) {
    this.inActiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.counterService.incrementActiveToInactiveCounter();
}

activateUser(index: number) {
    this.activeUsers.push(this.inActiveUsers[index]);
    this.inActiveUsers.splice(index, 1);
    this.counterService.incrementInactiveToActiveCounter();
  }
}
