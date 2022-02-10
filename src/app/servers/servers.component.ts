import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName: string = '';
  servers: string[] = [];
  displayDetailsCheck = false;
  displayDetailsToggleLog: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onHoldNewServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateNewServer() {
    this.servers.push(this.serverName);
    this.serverName = '';
    console.log(this.servers);
  }

  onToggleDisplayDetailsCheck() {
    this.displayDetailsCheck = !this.displayDetailsCheck;
    this.displayDetailsToggleLog.push(new Date().toUTCString());
  }

  getLogBackgroundColor(index: number) {
    if (index >=5) {
      return 'blue';
    }
    return 'yellow';
  }
}
