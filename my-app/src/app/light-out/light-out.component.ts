import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-out',
  templateUrl: './light-out.component.html',
  styleUrls: ['./light-out.component.scss']
})
export class LightOutComponent implements OnInit {

  
  lightItem:any=[1,2,3,4,5,6,7,8,9,10,11,12,
  13,14,15,16,17,18,19,20,21,22,23,24,25]

  constructor() { }

  ngOnInit(): void {
  }


  lightHandler(index:number){
    index = index - 1 
    document.getElementsByClassName("lightit")[index].classList.toggle("light-on");

    if((index + 1) % 5 !== 0){
      document.getElementsByClassName("lightit")[index+1].classList.toggle("light-on");
    }
    if(index % 5 !== 0){
      document.getElementsByClassName("lightit")[index-1].classList.toggle("light-on");
    }
    if(index < 20){
      document.getElementsByClassName("lightit")[index+5].classList.toggle("light-on");
    }
    if(index > 4) {
      document.getElementsByClassName("lightit")[index-5].classList.toggle("light-on");
    }

    if(document.getElementsByClassName("light-on").length == 25){
      alert("you Win")
    }
    

    // document.getElementsByClassName("lightit")[index+5].classList.toggle("light-on");
    // document.getElementsByClassName("lightit")[index-5].classList.toggle("light-on");




  }


}
