const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.end("Hello on the main page")
    } else if(req.url === "/download"){
        const readStream = fs.createReadStream("myText.txt")
        readStream.pipe(res)
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("Page not found")
    }
}
)

server.listen(3000, ()=>{
    console.log("serwer na porcie 3000")
})