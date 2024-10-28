import http from 'http'
import url from 'url'

http.createServer((req, res)=>{
    const parsedURL = url.parse(req.url, true)
    const queryParams = parsedURL.query
    
    res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"})

    res.write(JSON.stringify(queryParams))
    // res.write(queryParams)
    res.write("\n")
    res.end("Odczytano parametry zapytania.")


}).listen(3000)

console.log("serwer nasluchuje localhost:3000")