/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


funtion render() {
  //This function generates the view each time the store is updated
};

funtion viewStartPage() {
  //view the starting page that will include. Welcome and short description. 
  //Start Quiz button
};

function viewQuestion() {
  //Will  generate the questions on each page
  //keep track of which question we are on
  //keep track of right and wrong answers.
  //display answer right or wrong 
  //Submit button
};

function viewQuestionCorrect() {
  //display if question is correct
  //celebratory image
  //show current score
  //display next question
};

function viewQuestionWrong() {
  //display if question is wrong
  //Sad image
  //Show current score
  //show the correct answer
  //display the next question button
};

function viewEndGame() {
  //Diplay a tally of the score
  //Display pass or fail. >= 4 pass.  
  //Reset button
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 * 
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function returnHTMLTemplates() {
  adfafad
};
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)