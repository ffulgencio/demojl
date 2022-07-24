import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero = {id: 0, name:''}
  @Output() Emitir: EventEmitter<Hero> = new EventEmitter();
  
  constructor(private heroService:HeroService) { }

  guardarHeroe(){
    if (this.hero.id == 0){
      this.heroService.addHero(this.hero).subscribe((resp:any) => {
        this.hero.id = resp;
        this.Emitir.next(this.hero);
      });
    }else{
      this.heroService.updateHero(this.hero).subscribe();
    }
  }
  ngOnInit(): void {
  }

}
