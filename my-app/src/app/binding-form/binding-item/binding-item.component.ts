import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-binding-item',
  templateUrl: './binding-item.component.html',
  styleUrls: ['./binding-item.component.scss']
})
export class BindingItemComponent implements OnInit {

  @Input() inputData:any;
  @Input() inputIndex:any;

  @Output() deleteIndex = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }

  deleteHandler(dIndex:any){

    this.deleteIndex.emit(dIndex);
  }

}
