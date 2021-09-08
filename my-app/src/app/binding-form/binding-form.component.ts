import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-form',
  templateUrl: './binding-form.component.html',
  styleUrls: ['./binding-form.component.scss']
})
export class BindingFormComponent implements OnInit {

  lastData:any = [];
 
  constructor() { }

  ngOnInit(): void {
  }


  todoArrays(data:any){
    this.lastData.push(data);
 
  }

  deleteIndexLast(e:any){
    // this.lastData.splice(e,1);
    this.lastData = this.lastData.filter((value:any,index:any)=>{
      return index !== e;
    })
   
    
  }
 
 
}
