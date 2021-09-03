import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.scss'],
  styles:[`
  .red {
      color:red;
  }
 `]
})
export class Practice3Component implements OnInit {

  textToggle=true;
  incArray:any= [];
  test:number = 0;

 


  constructor() { }

  ngOnInit(): void {
  }


  buttonHandler(){
 
    this.textToggle = !this.textToggle;

    this.incArray.push(this.test);
    this.test++;
    
    console.log(this.incArray)

  }
}
