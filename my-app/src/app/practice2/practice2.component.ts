import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.scss']
})
export class Practice2Component {

  modelText:string = "";
  modalArray:any = [];


  constructor() { }

 

addHandler(){

  if(this.modelText.length > 0){
    this.modalArray.push(this.modelText);
  }
  // this.modelText = ""
}

deleteHandler(x:number){

  // this.modalArray.splice(x, 1);

var filtered = this.modalArray.filter(function(value:any,index:any){ 
      return index !== x;
});
this.modalArray = filtered

}
  

}
