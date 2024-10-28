const EventEmitter = require("events")

const myEmitter = new EventEmitter()

// function observerFunction(){
//     console.log("Zdarzenie my_event zostało wyemitowane")
// }

const greeting = name => console.log(`Witaj, ${name}`)

myEmitter.on("greet", greeting)
myEmitter.emit("greet", "janek")

myEmitter.removeListener('greet', greeting)
myEmitter.emit("greet", "janek")

// myEmitter.emit("my_event")