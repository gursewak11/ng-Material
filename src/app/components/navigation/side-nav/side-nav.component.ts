import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  opened1= false;
  opened2= false;

  log(state){
    console.log(state);
  }
  ngOnInit(): void {
  }

}
