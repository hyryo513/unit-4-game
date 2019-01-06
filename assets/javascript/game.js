//global varaibles
var answer;
var wins = 0;
var losses = 0;
var value = [];
var totalScore = 0;
var resultMessage;

//function
function answerGenerator(){
    answer = Math.floor(Math.random() * 101) + 19;
};

function valueGenerator(){
    value = [];
    for (i=0; i<4; i++){
        value.push(Math.floor(Math.random() * 12) + 1);
    }
};

function initializtion(){
    answerGenerator();
    valueGenerator();
    totalScore = 0;
    resultMessage = "";
    $("#answer").text(answer);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
    $("#crystal1").attr("data-crystalvalue", value[0]);
    $("#crystal2").attr("data-crystalvalue", value[1]);
    $("#crystal3").attr("data-crystalvalue", value[2]);
    $("#crystal4").attr("data-crystalvalue", value[3]);
};

function resultCheck(){
    if (totalScore === answer){
        wins++;
        resultMessage = "You Won!";
        $("#resultMessage").text(resultMessage);
        $("#wins").text(wins);
        initializtion();
    }
    else if(totalScore > answer){
        losses++;
        resultMessage = "You Loss!";
        $("#resultMessage").text(resultMessage);
        $("#losses").text(losses);
        initializtion();
    }
};

function scoreCal(){
    resultMessage = "";
    $("#resultMessage").text(resultMessage);
    totalScore = totalScore + parseInt($(this).attr("data-crystalvalue"));
    $("#totalScore").text(totalScore);
    resultCheck();
};

//script starts here
initializtion();

$("#crystal1").on("click", scoreCal);
$("#crystal2").on("click", scoreCal);
$("#crystal3").on("click", scoreCal);
$("#crystal4").on("click", scoreCal);


