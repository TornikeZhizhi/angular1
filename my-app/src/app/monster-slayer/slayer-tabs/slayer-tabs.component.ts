import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slayer-tabs',
  templateUrl: './slayer-tabs.component.html',
  styleUrls: ['./slayer-tabs.component.scss']
})
export class SlayerTabsComponent implements OnInit {

  @Input() test:any;
  myitem:string = "blue";

  constructor() { } 

  ngOnInit(): void {


  }

  getMonsterWidth(){

    return this.test.monster + "%"
  }

  getMyWidth(){

    return this.test.my + "%"
  }

}
