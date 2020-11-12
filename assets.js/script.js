var startQuiz = document.getElementById("startQuiz");


startQuiz.addEventListener("click", startQuiz);


// document.addEventListener("click",function(event){
  

    function nextQuestion(){
        position++
        document.querySelector("#question_header").innerText = "<h4>"+questionArray[position].question+"</h4>"
    
    }

    function timer (){
        time = 60
        if(time < 60 {alert: "your time is up"}}
      
       
startInterval(timer,1000)

stopInterval(timer, 1000)



// timer
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");


function startQuiz() {
  
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

 
  getQuestion();
}

function getQuestion() {
  
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";


  currentQuestion.choices.forEach(function(choice, i) {
    
    var choicebutton = document.createElement("button");
    choicebutton.setAttribute("class", "choice");
    choicebutton.setAttribute("value", choice);

    choicebutton.textContent = i + 1 + ". " + choice;
    choicebutton.onclick = questionClick;
    choicesEl.appendChild(choicebutton);
  });
}


function saveHighscore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    
    window.location.href = "highscores.html";
  }
}




submitBtn.onclick = saveHighscore
startBtn.onclick = startQuiz;
initialsEl.onclick = enterinitials;
