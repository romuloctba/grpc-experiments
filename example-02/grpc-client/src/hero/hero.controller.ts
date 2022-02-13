import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';
import { Hero } from './types/hero';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService){}

  @Get('')
  getHero() {
    return 'hi hero';
  }

  @Get('/:id')
  findHeroById(@Param('id') id): Observable<Hero> {
    return this.heroService.getHero(id);
  }
}
