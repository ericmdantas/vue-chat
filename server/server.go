package server

import (
	"fmt"
	"net/http"

	"golang.org/x/net/websocket"
)

func Init() {
	http.Handle("/ws", websocket.Handler(func(conn *websocket.Conn) {
		for {
			var b []byte

			websocket.Message.Receive(conn, &b)

			msg := Parse(b)

			fmt.Println(msg)
		}
	}))

	if err := http.ListenAndServe(":3213", nil); err != nil {
		panic(err)
	}
}
