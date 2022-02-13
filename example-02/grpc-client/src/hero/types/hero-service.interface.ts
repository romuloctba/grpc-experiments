import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HeroById } from './hero-by-id';

export interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
}