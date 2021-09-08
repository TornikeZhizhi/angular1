import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model"


@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.scss']
})
export class Practice2Component {

  modelText:string = "";
  modalArray:any = [];
  ingredients: Ingredient[] = [
    new Ingredient("მსხალი",5),
    new Ingredient("მსხალი",5),
    new Ingredient("მსხალი",5)
  ];

  height:number=59;
  width:number=59;
  backgroundColor:string="orange";
  boxArray:any=[];
  

  constructor() { }

 

addBoxHandler(){

  const colorObject = {
    height:this.height + "px",
    width:this.width + "px",
    backgroundColor:this.backgroundColor
  }

  this.boxArray.push(colorObject);

  console.log(this.ingredients)

}

removeboxHandler(e:number){
  
  // this.boxArray.splice(e,1)
  var filtered = this.boxArray.filter(function(value:any,index:any){ 
    return index !== e;
  });
 this.boxArray = filtered 
}



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
