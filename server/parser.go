package server

import "encoding/json"

func Parse(b []byte) *Msg {
	var m Msg

	if err := json.Unmarshal(b, &m); err != nil {
		panic(err)
	}

	return &m
}
