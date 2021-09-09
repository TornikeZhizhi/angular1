import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slayer-controls',
  templateUrl: './slayer-controls.component.html',
  styleUrls: ['./slayer-controls.component.scss']
})
export class SlayerControlsComponent implements OnInit {

  monsterHealth:number=0;
  myHealth:number=0;
  toggleGame:boolean = true;

  @Output() outPutHealth = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }


  randomHandler(numb1:number,numb2:number){

    var random1 = Math.floor(Math.random() * numb1 + 1);
    var random2 = Math.floor(Math.random() * numb2 + 1);
    return {monsterHealth:random1,myHealth:random2}
  }

  attackHandler(){

    if(this.toggleGame){
      let damageArray = this.randomHandler(30,35);
        const damagedHealth = {
          monster:this.monsterHealth += damageArray.monsterHealth,
          my:this.myHealth += damageArray.myHealth,
        }

       this.outPutHealth.emit(damagedHealth);

      if(damagedHealth.monster >= 100 && damagedHealth.my >= 100){
        if(damagedHealth.monster > damagedHealth.my){
          alert("Monster win");
          this.toggleGame = false;

        }else {
          alert("i win")
          this.toggleGame = false;
        }

      }else {
        if(damagedHealth.monster >= 100) {
          alert("Monster win")
          this.toggleGame = false;
        }
        if(damagedHealth.my >=100){

          alert("i WIN")
          this.toggleGame = false;
        }
      }
  }

  }


  resetHandler(){

    this.toggleGame = true;

    const damagedHealth = {
      monster:0,
      my:0,
    }
    this.monsterHealth = 0;
    this.myHealth = 0;

   this.outPutHealth.emit(damagedHealth);
  }
}
