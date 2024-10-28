const fs = require('fs')

const readableStream = fs.createReadStream("pipeinput.txt")
const writetableStream = fs.createWriteStream("pipeoutput.txt")

readableStream.pipe(writetableStream)

writetableStream.on("finish", ()=>{
    console.log("plik skopiowano")
})
readableStream.on("error", err=>{
    console.log("błąd", err)
})