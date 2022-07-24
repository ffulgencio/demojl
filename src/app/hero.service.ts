import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  url = environment.url;
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.url);
  }

  addHero(hero:Hero){
    return this.http.post(this.url,hero)
  }

  updateHero(hero:Hero){
    return this.http.put(this.url,hero)
  }


  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
}
