# Go server side streaming gRPC

- install protoc: `sudo apt-get install protobuf-compiler`
- install protoc-gen-go-grpc: `go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`
- compile data.proto: `protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative data.proto`

---

- source: https://www.freecodecamp.org/news/grpc-server-side-streaming-with-go/