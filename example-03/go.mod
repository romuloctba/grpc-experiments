module rcdevlabs.github.io/grpc/example03

go 1.17

require (
	github.com/mackerelio/go-osstat v0.2.1
	github.com/romuloctba/grpc-experiments/example-03 v0.0.0-20210208184539-a64093078dc8
	google.golang.org/grpc v1.44.0
	google.golang.org/protobuf v1.27.1
)

require (
	github.com/golang/protobuf v1.5.0 // indirect
	golang.org/x/net v0.0.0-20201216054612-986b41b23924 // indirect
	golang.org/x/sys v0.0.0-20210113181707-4bcb84eeeb78 // indirect
	golang.org/x/text v0.3.4 // indirect
	google.golang.org/genproto v0.0.0-20201214200347-8c77b98c765d // indirect
)

replace github.com/romuloctba/grpc-experiments/example-03 => ./
