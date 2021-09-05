import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-poke-doce',
  templateUrl: './poke-doce.component.html',
  styleUrls: ['./poke-doce.component.scss'],
 
})
export class PokeDoceComponent implements OnInit {


  pokeArray:any=[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];
  upArray:any=[];
  downArray:any=[];
  upExperience:number=0;
  downExperience:number=0;

  constructor() {
    
    
   

  }

  ngOnInit(): void {
    this.loadPoke()
  
  }
  loadPoke(){
     
    while (this.upArray.length < 4) {
      var randomNumber = Math.floor(Math.random() * this.pokeArray.length)
      this.upArray.push(this.pokeArray[randomNumber]);
      this.pokeArray.splice(randomNumber, 1);
    }
    this.downArray = this.pokeArray;

    
    for (let index = 0; index < this.upArray.length; index++) {
     this.upExperience += this.upArray[index].base_experience
    }

    for (let index = 0; index < this.downArray.length; index++) {
     this.downExperience += this.downArray[index].base_experience
    }
  }
 

  regameHandler(){
  
    this.pokeArray =[
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ];
    this.upArray=[];
    this.downArray=[];
    this.upExperience=0;
    this.downExperience=0;


    this.loadPoke()

  }



}
