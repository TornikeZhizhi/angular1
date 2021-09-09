import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monster-slayer',
  templateUrl: './monster-slayer.component.html',
  styleUrls: ['./monster-slayer.component.scss']
})
export class MonsterSlayerComponent implements OnInit {

  inHealthData:any = 0;

  constructor() { }

  ngOnInit(): void {
  }


  mainPutHealth(data:any){

    this.inHealthData = data;


  }
}
