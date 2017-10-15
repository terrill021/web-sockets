var express = require ("express")
var http = require ("http")
var app = express()
var server = http.Server(app)

var messages = new Array()

var io = require("socket.io")(server)

io.on("connection", (socket) => {
    console.log("Alguien se conecto por web socket")
    socket.emit("messages", messages)

    socket.on("message", (message) => {
        console.log(JSON.stringify(messages));
        messages.push(message)
        messages.push(`Do you write me "${message}"?`)
        socket.emit("messages", messages)
    })
})
app.use(express.static("public"))
app.get("/", (req, res) => { res.json({"message" : "hello world!!"})})


server.listen(1337, () => console.log("servidor corriendo en el puerto 1337."))