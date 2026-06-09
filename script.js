const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;
    appendUserMessage(userMessage);
    userInput.value = '';
    // Simulate bot response
    setTimeout(() => {
        const botReply = generateBotReply(userMessage);
        appendBotMessage(botReply);
    }, 1000);
}

function appendUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function appendBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'bot-message';
    botMessageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(botMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase();
    if (lowercaseMessage.includes('hi') || lowercaseMessage.includes('hello') || lowercaseMessage.includes('hey')) {
        return 'Hello!';
    } else if (lowercaseMessage.includes('how are you')) {
        return 'I\'m doing well, thank you for asking!';
    } else if (lowercaseMessage.includes('what is your name')) {
        return 'My name is ChatBot.';
    } else if (lowercaseMessage.includes('who created you')) {
        return 'I was created by Mr Furqan';
    } else if (lowercaseMessage.includes('are you a robot')) {
        return 'Yes, I am a robot.';
    } else if (lowercaseMessage.includes('what can you do')) {
        return 'I can answer questions and engage in conversation with you!';
    } else if (lowercaseMessage.includes('how old are you')) {
        return 'I don\'t have an age, as I am a computer program.';
    } else if (lowercaseMessage.includes('what is the meaning of life')) {
        return 'The meaning of life is a philosophical question that has puzzled humans for centuries!';
    } else if (lowercaseMessage.includes('tell me a joke')) {
        return 'Why don\'t scientists trust atoms? Because they make up everything!';
    } else if (lowercaseMessage.includes('what is the capital of france')) {
        return 'The capital of France is Paris.';
    } else if (lowercaseMessage.includes('what is the largest planet in our solar system')) {
        return 'The largest planet in our solar system is Jupiter.';
    } else if (lowercaseMessage.includes('what is the square root of 144')) {
        return 'The square root of 144 is 12.';
    } else if (lowercaseMessage.includes('tell me about artificial intelligence')) {
        return 'Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.';
    } else if (lowercaseMessage.includes('what programming languages do you know')) {
        return 'I am proficient in JavaScript, HTML, CSS, and many others!';
    } else if (lowercaseMessage.includes('what is the purpose of life')) {
        return 'The purpose of life is subjective and can vary from person to person.';
    } else if (lowercaseMessage.includes('do you sleep')) {
        return 'No, I do not require sleep like humans do.';
    } else if (lowercaseMessage.includes('what is your favorite color')) {
        return 'As a computer program, I do not have the ability to perceive or have preferences for colors.';
    } else if (lowercaseMessage.includes('what is the time')) {
        const currentTime = new Date();
        return `The current time is ${currentTime.toLocaleTimeString()}.`;
    } else if (lowercaseMessage.includes('what is your purpose')) {
        return 'My purpose is to assist users and provide information to the best of my ability!';
    } else if (lowercaseMessage.includes('goodbye') || lowercaseMessage.includes('bye')) {
        return 'Goodbye!';
    } else {
        // Default response if no specific condition is met
        return `I don't understand your question: "${userMessage}"`;
    }

}

document.getElementById('refreshBtn').addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});


