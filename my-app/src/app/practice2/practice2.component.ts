import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.scss']
})
export class Practice2Component {

  username:string = "";
  buttonActive:boolean=false;

  constructor() { }

 

  inputHandler(){

   let usernameLength = this.username.length 
    
   console.log(usernameLength)
   if(usernameLength > 0){
    this.buttonActive = true
   }else {
    this.buttonActive = false
   }
   

  }

  // stringToEmpty(){
    
  //   this.username = "";
  //   this.buttonActive = false
  // }

}
