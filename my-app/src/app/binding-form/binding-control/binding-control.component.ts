import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-binding-control',
  templateUrl: './binding-control.component.html',
  styleUrls: ['./binding-control.component.scss']
})
export class BindingControlComponent implements OnInit {

@Output() outputData = new EventEmitter<any>()

  arrayData:any;


  constructor() { 

  }

  ngOnInit(): void {
  }

  addTodo(){
   
    this.outputData.emit(this.arrayData);
  }
 


}
