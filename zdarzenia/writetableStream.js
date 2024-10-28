const fs = require('fs')

const writetableStream = fs.createWriteStream('output.txt')

writetableStream.write("to są dane ze streama \n")
writetableStream.write("a to druga linia ze streama \n")

writetableStream.end()

writetableStream.on("finish", ()=>console.log("zakończenie zapisu"))
writetableStream.on("error", err=>console.error("error, ",err))