async function sendMessage(){

const messageInput = document.getElementById("message");
const message = messageInput.value;

if(message.trim()==="") return;

const chatbox = document.getElementById("chatbox");

chatbox.innerHTML += `<div class="user-message">${message}</div>`;

messageInput.value="";

const response = await fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
});

const data = await response.json();

chatbox.innerHTML += `<div class="ai-message">${data.reply}</div>`;

chatbox.scrollTop = chatbox.scrollHeight;
}