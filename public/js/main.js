const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const socket = io();

//Message from server
socket.on('message', message => {
    console.log(message)
    outputMessage(message);

    // Scroll down
    cjatMessages.scrollTop = chatMessages.scrollHeight;
})

// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get message text
    const msg = e.target.elements.msg.value;
    
    //Emitting message to the server
    socket.emit('chatMessage', msg);

    //Clear input
    e.target.elements.message.value = '';
    e.target.elements.message.focus();
})

//Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">
        ${message/text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}