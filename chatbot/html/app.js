alert(" Hello there,Welcome to the Guftagoobot! \n How can I help you today?");
function sendMessage() {
    var  input = document.getElementById("userInput");
    var messageText = input.value.trim();
 sendMessage();

    if (messageText === "hi"){
        alert("Hello, Nice to meet you ?")
        return; 
    }
    if (messageText === "how are you?"){
        alert("I am just a bot, but thanks for asking!");
        return;
    }
    if (messageText === "bye"){
        alert("Goodbye! Have a great day!");
        return;
    }
    if (messageText === "help"){
        alert("dont worry, I am here to help you! \n you can ask me anything about our services or products.");
        return;
    }
    if (messageText === "thank you"){
        alert("you're welcome! If you have any more questions, feel free to ask.");
        return;
    }
    if (messageText === "what is your name?"){
        alert("I am Guftagoobot, your virtual assistant.");
        return;
    }
    console.log(sendMessage);

    // Create user message bubble (right aligned)
    var  userMessage = document.createElement("div");
    userMessage.className = "message1";
    userMessage.innerText = messageText;
    const chatBox = document.getElementById("chatBox");
    chatBox.appendChild(userMessage);
    input.value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Optional: Simulate bot response after 1 second
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message";
        botMessage.innerText = "Bot: " + getBotResponse(messageText);
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

