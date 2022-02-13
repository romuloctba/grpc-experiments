# gRPC server streaming with GO

This example sends hardware stats via gRPC server streams using GO

---
## Description / Highlights

- The gRPC .proto file defines the message format for the stats
- The gRPC .proto file is compiled with protobuf-compiler, using plugins for GO (server and client) and Web (outputs .js file)
- but the values are fetch at the server, by using the GO libs:
"github.com/mackerelio/go-osstat/cpu" and "github.com/mackerelio/go-osstat/memory"


## Running

1. `go run ./server`
2. `go run ./client`

---

source: https://itnext.io/streaming-data-with-grpc-2eb983fdee11