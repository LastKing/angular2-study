/**
 * Created by Rain on 2016/7/4.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES}  from './mock-heroes';

@Injectable()
export class HeroService {
    getHero(id:number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    getHeroes() {
        // return Promise.resolve(HEROES)
        return new Promise<Hero[]>((resolve, reject)=> {
            setTimeout(()=> {
                resolve(HEROES)
            }, 1000)
        });
    }
}