module.exports = class WS {
    constructor() {
        this._conn = new WebSocket('ws://localhost:9877/ws');
    }
    
    _stringify(info) {
        return JSON.stringify(info);
    }
    
    send(info) {
        this._conn.send(this._stringify({
            type: 'new_msg',
            data: info
        }))
    }
}