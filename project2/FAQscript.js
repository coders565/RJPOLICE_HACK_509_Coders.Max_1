function submitAnswers() {
    const form = document.getElementById('mcqForm');
    const resultDiv = document.getElementById('result');
  
    // Get selected answers
    const answers = {
      question1: getSelectedAnswer('question1'),
    //   question2: getSelectedAnswer('question2'),
    };
  
    // Check if all questions are answered
    if (answers.question1 ) {
      // Display the selected answers
      resultDiv.innerHTML = `<h4>Your Answers:</h4>
                             <p> ${answers.question1}</p>`;
    } else {
      resultDiv.innerHTML = '<p>Please select any option.</p>';
    }
  }
  
  function getSelectedAnswer(questionName) {
    const options = document.getElementsByName(questionName);
    for (const option of options) {
      if (option.checked) {
        return option.value;
      }
    }
    return null;
  }
  