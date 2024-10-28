import http from 'http'

http.createServer((req,res)=>{
    //console.log(req.headers)

    
    const myURL = new URL(req.url, `http://${req.headers.host}`)
    const queryParams = Object.fromEntries(myURL.searchParams.entries())
    console.log(queryParams)

    res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"})
    res.write(JSON.stringify(queryParams))
    res.write("\n")
    res.end("Odczytano dane")

    
}).listen(3000)

console.log("na 3000")