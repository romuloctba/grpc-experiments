import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ServerUnaryCall } from 'grpc';
import { Hero } from './types/hero';
import { HeroById } from './types/hero-by-id';

@Controller('hero')
export class HeroController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Mark' },
      { id: 4, name: 'Twain' },
      { id: 5, name: 'Harry' },
      { id: 6, name: 'Potter' },
    ]
    return items.find(({ id }) => id === data.id);
  }
}
