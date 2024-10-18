fetch('data/conversations.json')
  .then(response => response.json())
  .then(conversations => displayConversations(conversations))
  .catch(error => console.error('Error fetching conversations:', error));

function displayConversations(conversations) {
  const conversationList = document.getElementById('conversation-list');
  
  conversations.forEach(conversation => {
    const conversationItem = document.createElement('div');
    conversationItem.classList.add('conversation-item');
    
    conversationItem.innerHTML = `
      <img src="${conversation.profilePicture}" alt="${conversation.sender}'s profile picture" class="profile-picture">
      <div class="conversation-info">
        <h3>${conversation.sender}</h3>
        <p>${conversation.lastMessage}</p>
      </div>
    `;
    
    conversationItem.addEventListener('click', () => displayMessages(conversation));
    
    conversationList.appendChild(conversationItem);
  });
}
function displayMessages(conversation) {
    const messageDetail = document.getElementById('message-detail');
    messageDetail.innerHTML = ''; 
    conversation.messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      
      messageElement.innerHTML = `
        <strong>${message.sender}:</strong>
        <p>${message.message}</p>
        <span class="timestamp">${new Date(message.timestamp).toLocaleTimeString()}</span>
      `;
      
      messageDetail.appendChild(messageElement);
    });
  
    const messageForm = document.createElement('form');
    messageForm.innerHTML = `
      <input type="text" id="new-message" placeholder="Type your message...">
      <button type="submit">Send</button>
    `;
    messageDetail.appendChild(messageForm);
  
    messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newMessage = document.getElementById('new-message').value;
      if (newMessage) {
        addMessage(conversation, newMessage);
      }
    });
  }
function addMessage(conversation, messageContent) {
    const newMessage = {
      message: messageContent,
      timestamp: new Date().toISOString(),
      sender: 'You'
    };
    
    conversation.messages.push(newMessage);
  
    displayMessages(conversation);
  }
setTimeout(() => {
    const newMessage = {
      message: "Are you free this weekend?",
      timestamp: new Date().toISOString(),
      sender: "Bob"
    };
  
    conversations[1].messages.push(newMessage);
  
    if (Notification.permission === 'granted') {
      new Notification('New message from Bob');
    }
  }, 5000);
  
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
      