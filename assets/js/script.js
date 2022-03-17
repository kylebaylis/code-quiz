// time in timer at start
var timeRemain = 60;

// timer start number
var timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";

// create initial start button
var toStart = document.getElementById("game").innerHTML = "<button id='startGame'>Start</button>";

// for addEventListener to get button id
var startButton = document.getElementById("startGame");


// main game code
var codeGameStart = function() {
    // window.alert(""); // test code to see if function and click work - it does

    /*
    // decrease time by one on button click (needs to be every second) COUNTDOWN TIMER HERE
    timeRemain = timeRemain - 1;
    */

    // timer
    var startCount = function() {
        if (timeRemain <= -1) {
        clearInterval(startCount);
        return;
    }
        document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";
        timeRemain -= 1;     
        if (timeRemain === 0) {
            window.alert("Game over!");
        }
    }
    
    setInterval(startCount, 10);
    // timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>"; not neede?
        
    // to begin game
    if (codeGameStart) {
        toStart = document.getElementById("game").innerHTML = "<button id='startGame'>Ok</button>";
    }
}

// to click start to begin the game
var gameBegin = startButton.addEventListener("click", codeGameStart); 



