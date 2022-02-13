package main

import (
	"context"
	"fmt"
	"log"
	"time"

	hardwaremonitoring "github.com/romuloctba/grpc-experiments/example-03/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	ctx := context.Background()

	conn, err := grpc.DialContext(ctx, "localhost:7777", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}

	defer conn.Close()

	client := hardwaremonitoring.NewHardwareMonitorClient(conn)

	emptyReq := &hardwaremonitoring.EmptyRequest{}

	stream, err := client.Monitor(ctx, emptyReq)
	if err != nil {
		panic(err)
	}

	stop := time.NewTicker(7 * time.Second)

	for {
		select {
		case <-stop.C:
			err := stream.CloseSend()
			if err != nil {
				log.Fatal("Error closing stream ", err.Error())
			}
			return
		default:
			res, err := stream.Recv()
			if err != nil {
				panic(err)
			}

			fmt.Println("New Hardware State: ")
			fmt.Println("CPU Usage ", res.Cpu)
			fmt.Println("Memory Used ", res.MemoryUsed)
			fmt.Println("Memory Free ", res.MemoryFree)
		}
	}
}
