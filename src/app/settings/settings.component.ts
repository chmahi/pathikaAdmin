import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
add:any = {};
  constructor() {
window.scrollTo(0, 0);    
   }

  ngOnInit() {
  }

}
