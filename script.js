let peer = new Peer();
let conn;

peer.on("open", function(id){
document.getElementById("myid").innerText = id;
});

peer.on("connection", function(connection){
conn = connection;
setupConnection();
});

function connect(){

let peerid = document.getElementById("peerid").value;

if(!peerid){
alert("Enter a peer ID");
return;
}

conn = peer.connect(peerid);

setupConnection();
}

function setupConnection(){

conn.on("data", function(data){
addMessage("friend", data);
});

conn.on("open", function(){
addSystemMessage("Connected!");
});

}

function send(){

let input = document.getElementById("message");
let msg = input.value;

if(!msg || !conn) return;

conn.send(msg);

addMessage("you", msg);

input.value = "";
}

function addMessage(type,text){

let chat = document.getElementById("chat");

let div = document.createElement("div");
div.classList.add("message");

if(type==="you"){
div.classList.add("you");
div.innerText = "You: " + text;
}else{
div.classList.add("friend");
div.innerText = "Friend: " + text;
}

chat.appendChild(div);

chat.scrollTop = chat.scrollHeight;
}

function addSystemMessage(text){

let chat = document.getElementById("chat");

let div = document.createElement("div");
div.classList.add("message");
div.innerText = text;

chat.appendChild(div);
}
