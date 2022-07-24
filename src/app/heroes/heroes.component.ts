import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[]= [];
  selectedHero: Hero={id:-1, name:''}

  createNewHero(){
    this.selectedHero = {id:0, name:''}
  }


  addHeroList(hero: Hero){
    this.heroes.push(hero);
    this.selectedHero ={id:-1, name:''};
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes =>{
          console.log(heroes)  
          this.heroes = heroes
        });
  }

  constructor(private heroService: HeroService) {
    //this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
