# gRPC POCs

I created this repo to save some gRPC studies.

Each example lives in a folder, and they all have their own `Readme.md` with some specific info.

Also, the tutorial or blog post that I got each example from is available in their `Readme.md`


## Example 01

A simple Nodejs module that works as gRPC server and another NodeJs module that does the client's job.

They read and parse the `.proto` file on demand using `@grpc/proto-loader`


## Example 02

A NesJS gRPC server, and another NestJS that works as the client but also serves http endpoints.

Basically a REST API that fetches data via gRPC and serves it trough it's endpoints.

They read the `.proto` file on demand.

## Example 03

A GoLang server that serves hardware information (cpu, used memory, free memory) via gRPC streams.

The client, also GO, performs the requests to the server.

Client and Server both rely on compiled `.proto`, that was compiled using `protobuf-compiler` and go plugins.


## Example 04

Another GoLang example that reads compiled `.proto`.