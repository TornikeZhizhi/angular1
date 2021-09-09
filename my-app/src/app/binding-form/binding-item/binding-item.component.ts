import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-binding-item',
  templateUrl: './binding-item.component.html',
  styleUrls: ['./binding-item.component.scss']
})
export class BindingItemComponent implements OnInit {

  @Input() inputData:any;
  @Input() inputIndex:any;
  editInputData:any;
  saveDataToggler:number = 0;

  @Output() deleteIndex = new EventEmitter<any>();
  @Output() editData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteHandler(dIndex:any){

    this.deleteIndex.emit(dIndex);
  }

  saveHandler(inputdata:any, index:any){

    const allData = {
      inputdata:inputdata,
      inputIndex:index
    }
    this.editData.emit(allData)
    
    this.editInputData = "";
    document.getElementsByClassName("main_box")[index].classList.toggle("hide");
    document.getElementsByClassName("edit_box")[index].classList.toggle("hide");
  }

  editHandler(editIndex:number){

    // this.saveDataToggler = editIndex;
    document.getElementsByClassName("main_box")[editIndex].classList.toggle("hide");
    document.getElementsByClassName("edit_box")[editIndex].classList.toggle("hide");
  }


}