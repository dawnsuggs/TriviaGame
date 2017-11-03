
document.onKeyup = function(event) {
	alert("working");
}

//Variable array of questions
 	var triviaQuestions = ["When was the first World's Fair held in St. Louis?", 
	"Which one of these famous african american dance icons was born in St. Louis?", 
	"St. Louis is known for having invented what food?"];
	
	console.log(trivia)	

//Variable array of answers
	var answers1 = ["a: 1893", "b: 1904", "c: 1924"];
	var answers2 = ["Josephine Baker", "Katherine Dunham", "Paula Abdul"];
	var answers3 = ["licorice", "candy apple", "ice cream cone"];

	console.log(answers1);

//Variable of scores
	var scores = 0
Var userText=document.getElementById ("user-text");

document.onkeyup = function(){
	userText.textContent = event.Key,
	alert("start game");
};

//Run timer for 

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

  f      display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var thirtySeconds = 6 * 5,
        display = document.querySelector('#time');
    startTimer(thirtySeconds, display);

    console.log(startTimer)
};

//For each question
for(var i=0; i<questions.length; i++){

//User select answer

//Push to display answers with questions

//Compare with correct answer and show if user answer is correct for all three questions

//If player runs out of time while answering, game will end automatically

//If clock is still running after player answers all questions right, alert that "player wins!"

//If clock is still running after player answers two questions right out of three, alert "2 out 3 right - almost there!"

//If clock is still running after player anwers one question right out of three, alert "1 out of 3 right - better luck, next time"

//Add a win to the counter, if user answered all questions correctly

//reset counter and questions and answers

