import http from 'http'
import products from "./products.mjs"

http.createServer((req, res) =>{
    const myURL = new URL(req.url, `http://${req.headers.host}`)



    
    const category = myURL.searchParams.get("category")
    console.log(myURL.searchParams)
    console.log(category)
    const maxPrice = myURL.searchParams.get("maxPrice")

    let filteredProducts = products
    if(category){
        filteredProducts=filteredProducts.filter
        (product=> product.category === category)
    }

    if(maxPrice){
        filteredProducts=filteredProducts.filter
        (products => product.price <= Number(maxPrice))
    }

    res.writeHead(200, {"Content-Type":"application.json;charset=utf-8"})
    res.end(JSON.stringify(filteredProducts))
    //res.end(JSON.stringify({main:products}))


}).listen(3000)

console.log("serwer jest na localhost:3000")