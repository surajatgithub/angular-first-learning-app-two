import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
})
export class Assignment2Component implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
