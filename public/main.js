var socket = io.connect("http://localhost:1337", {"forceNew": true})

//var messages = new Array();

socket.on("messages", (data) => {
    render(data);
})

function render(messages) {
    

    let cadena = ""; 
    messages.map((message) => {
       cadena = `${cadena}<li>${message}</li>`;
    })

    document.getElementById("messages").innerHTML = cadena
}

function sendMessage (e) {
    socket.emit("message", document.getElementById("message").value.toString())
    document.getElementById("message").value = ""
    return false
}