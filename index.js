log = console.log;
var score = 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please Enter Your Name: ");
var welcomeMessage = " Welcome ";
var userChoice = readlineSync.question(
  "Press 1 to continue and any other number to exit: "
);
var highestScore = {
  name: "Narendra",
  score: 5,
};
function startQuiz(question, option, answer) {
  log();
  log(question);
  var userAns = readlineSync.question(option);
  if (userAns === answer) {
    score += 1;
    log(" score: " + score);
    log(" Congo! You are Right ");
  } else {
    log("Oops! You are wrong ");
    log("score: " + score);
  }
}
var questionList = [
  {
    question:
      "1. Thor’s hammer Mjolnir is made of metal from the heart of a dying what?",
    option: " a.)Star b.)Comet c.)Planet d.)Asteriod    ",
    answer: "a",
  },
  {
    question: "2. What is the name of the villain in Marvel Studios’ Ant-Man?",
    option: " a.)The Wasp b.)Hornet c.)Yellow Jacket d.)Ghost    ",
    answer: "c",
  },
  {
    question:
      "3. What is the name of the set of documents that regulate the activities of enhanced persons?",
    option:
      " a.)Stark Accords b.)Paris Accords c.)S.H.I.E.L.D Accords d.)Sokovia Accords    ",
    answer: "d",
  },
  {
    question:
      "4. What are the names of the batteries that the Guardians have to protect at the beginning of Marvel Studios’ Guardians of the Galaxy Vol. 2?",
    option:
      " a.)Harbulary Batteries b.)Anulax Batteries c.)Vibranium Batteries d.)Galaxy Batteries    ",
    answer: "b",
  },
  {
    question:
      "5. Which of the following is not on Captain America’s to-do list in Marvel Studios’ Captain America: The Winter Soldier?",
    option: " a.)Thai Food b.)Nirvana c.)Star Wars d.)Frozen Yougurt    ",
    answer: "d",
  },
];
function start() {
  for (var i = 0; i < questionList.length; i++) {
    startQuiz(
      questionList[i].question,
      questionList[i].option,
      questionList[i].answer
    );
  }
}
function showScore() {
  log();
  log("Your Score is: " + score);
}
function highestScorer() {
  log();
  log(" Name: " + highestScore.name);
  log(" score: " + highestScore.score);
}
function viewHScore() {
  var ans = readlineSync.question("Do you want to see the highest Scorer:  ");
  if (ans === "yes" || ans === "Yes" || ans === "YES") {
    highestScorer();
  } else {
    process.exit();
  }
}
if (userChoice === "1") {
  log(welcomeMessage + userName + " to MCU Fandom QUIZ ");
  start();
  showScore();
  viewHScore();
} else {
  process.exit();
}
