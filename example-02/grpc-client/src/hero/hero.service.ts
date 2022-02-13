import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { Hero } from './types/hero';
import { HeroService as RemoteHeroService } from './types/hero-service.interface';

@Injectable()
export class HeroService {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'hero.proto'),
      url: '0.0.0:50051',
    },
  })

  client: ClientGrpc;
  private remoteService: RemoteHeroService;

  onModuleInit() {
    this.remoteService = this.client.getService<RemoteHeroService>('HeroesService');
  }

  getHero(id: number): Observable<Hero> {
    return this.remoteService.findOne({ id });
  }

}
