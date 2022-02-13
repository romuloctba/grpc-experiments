package main

import (
	"fmt"
	"log"
	"net"

	hardwaremonitoring "github.com/romuloctba/grpc-experiments/example-03/proto"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("Welcome to HW Monitoring")

	lis, err := net.Listen("tcp", ":7777")

	if err != nil {
		panic(err)
	}

	gRPCServer := grpc.NewServer()

	s := &Server{}

	hardwaremonitoring.RegisterHardwareMonitorServer(gRPCServer, s)

	log.Println(gRPCServer.Serve(lis))
}
