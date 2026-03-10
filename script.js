let peer = new Peer();
let conn;

peer.on("open", function(id) {
    document.getElementById("myid").innerText = id;
});

peer.on("connection", function(connection) {
    conn = connection;
    setupConnection();
});

function connect() {
    let peerid = document.getElementById("peerid").value;
    conn = peer.connect(peerid);
    setupConnection();
}

function setupConnection() {

    conn.on("data", function(data) {
        addMessage("Friend: " + data);
    });

}

function send() {

    let msg = document.getElementById("message").value;
    conn.send(msg);
    addMessage("You: " + msg);

}

function addMessage(msg) {

    let chat = document.getElementById("chat");
    chat.innerHTML += msg + "<br>";
}
