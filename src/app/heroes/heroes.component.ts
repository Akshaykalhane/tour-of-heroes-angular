import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroe';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
    hero : Hero ={
      id:1,
      name:'Windstorm'
    };
    newHeroName:string='';
    heroes=HEROES;
    selectedHero?:Hero;
    onSelect(hero : Hero) : void{
      this.selectedHero=hero;
    }
    onChange(val:string){
      this.newHeroName=val;
    }
}
