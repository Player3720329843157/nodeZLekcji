const EventEmitter= require('events')
const http = require("http")

const serverEmitter = new EventEmitter()

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        serverEmitter.emit("homepage", res)
    } else {
        res.end("Strona nie znaleziona")
    }
})

serverEmitter.on("homepage", res => {
    res.end("Witaj na stronie głównej")
})

server.listen(3000, ()=>{
    console.log("Serwer nasluchuje na porcie 3000")
})