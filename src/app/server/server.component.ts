import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color!: string;
  buttonText!: string;
  buttonStyle!: string;

  @Input() serverInput!: Server;


  ngOnInit(): void
  {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean)
  {
    if (isOnline)
    {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
      this.buttonStyle = 'btn btn-dark mb-2 action';
    }
    else
    {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
      this.buttonStyle = 'btn btn-primary mb-2 action';
    }
  }

  toggleStatus(onlineStatus: boolean)
  {
    console.log(this.serverInput.name, ':', onlineStatus);
    this.setServerStatus(!onlineStatus);
  }

}
