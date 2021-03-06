/**
 * Created by Rain on 2016/7/5.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'windstorm2'
  };

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  getHeroes(): void {
    this.heroService.getHeroesByHttp().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}