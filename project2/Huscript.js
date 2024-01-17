document.addEventListener('DOMContentLoaded', function () {
    const happyBtn = document.getElementById('happyBtn');
    const unhappyBtn = document.getElementById('unhappyBtn');
  
    // Event listener for Happy button
    happyBtn.addEventListener('click', function () {
      alert('Thank you for your positive feedback!'); // You can replace this with your desired action
    });
  
    // Event listener for Unhappy button
    unhappyBtn.addEventListener('click', function () {
      alert('We\'re sorry to hear that. Please provide more details.'); // You can replace this with your desired action
    });
  });
  