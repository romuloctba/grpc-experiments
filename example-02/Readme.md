# NestJs gRPC Server and Client

This is a basic example running a NestJs gRPC Server and consuming it with a gRPC Client, also made with NestJs.

---

### How it works

The `grpc-server` initializes with `nestFactory.createMicroservice` and sets the url to be '0.0.0:50051'

The `grpc-client` intializes a usual NestJs http server, and provides the `GET /hero/:id` route.
This route uses the `heroService` to instantiate a gRPC client, that will send requests to the server.

---

### Highlights:
- The .proto file, in this POC, exists in both server and client as a copy. Ideally it would be installed as a lib, or shared
- There is the need to setup interfaces for the proto methods, so TS can understand them. These would also be ideally installed or shared.

As an example, bellow is the HeroService typescript interface, that exposes the gRPC contract just like defined in the .proto file.

```
export interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
}
```

---

### Source

This example is adapted from [NestJS gRPC Docs](https://docs.nestjs.com/microservices/grpc) and some good ideas from the amazing [wanago.io](https://wanago.io/2020/11/30/api-nestjs-microservices-grpc-framework/) blog.
