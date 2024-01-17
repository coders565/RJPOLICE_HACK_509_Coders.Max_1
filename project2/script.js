document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbot = document.querySelector('.chatbot');
    const closeBtn = document.querySelector('.close-btn');
    const chatbox = document.querySelector('.chatbox');
    const textarea = document.querySelector('.chat-input textarea');
    const sendBtn = document.getElementById('send-btn');
  
    let userData = {};
  
    // Function to toggle chatbot visibility
    function toggleChatbot() {
      document.body.classList.toggle('show-chatbot');
    }
  
    // Function to add a new message to the chatbox
    function addMessage(message, className) {
      const newMessage = document.createElement('li');
      newMessage.className = `chat ${className}`;
      newMessage.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>
                              <p>${message}</p>`;
      chatbox.appendChild(newMessage);
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  
    // Function to handle user input and store data
    function handleUserInput() {
      const message = textarea.value.trim();
  
      if (message !== '') {
        addMessage(message, 'outgoing');
        textarea.value = '';
  
        // Ask questions and store user data
        if (!userData.name) {
          userData.name = message;
          addMessage(`Hello ${userData.name} Enter your Complaint No.? नमस्ते "${userData.name}"अपनी एफआईआर आईडी दर्ज करें`, 'incoming');
        } else if (!userData.address) {
          userData.address = message;
          addMessage(`Enter your Age , ${userData.name}\nअपना नाम दर्ज करें , ${userData.name}`, 'incoming');
        } else if (!userData.age) {
          userData.age = message;
          addMessage(`What is your gender \nअपना लिंग दर्ज करें? `, 'incoming');
        } else if (!userData.gender) {
          userData.gender = message;
          addMessage(`Thank you for providing your information. You're all set!`, 'incoming');
          // You can now send the userData object to your server or perform further actions.
        }
      }
    }
  
    // Event listeners
    chatbotToggler.addEventListener('click', toggleChatbot);
    closeBtn.addEventListener('click', toggleChatbot);
    sendBtn.addEventListener('click', handleUserInput);
    textarea.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
      }
    });
  });
  