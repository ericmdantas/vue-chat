package server

type msgData struct {
	Text string `json:"text"`
}

type Msg struct {
	Type string `json:"type"`
	Data msgData `json:"data"`
}
