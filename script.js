

//Day 3 progress: Debugged the timer desync. Did it by clearing IntervalId in the function during assiginging a listener then setting the intervalId as the interval that begins
//Day 4: Set up the status monitor for the numbers, made the buttons take up space.
//Day IDK: Set up a pause/resume button and got it working.
//Day IDK +1: added a +/- time button.
//Day X: This is now a living document. I will no longer record daily changes. Old days will be kept on here since I am sentimental.
//Known bugs: pressing the pause button with no time causes NaN to be displayed everywhere. <- This one fixed itself somehow. Timer goes into negative numbers for a second when it is finished. Pausing the timer and adding time will not display the change.
// Page setup
let clock = document.getElementById("time");
let clock2 = document.getElementById("timeMinutes");
let formattedTime = document.getElementById("formattedTime");
let intervalId = null;
assignListeners();
assignChangers();
let timerSeconds = "Seconds remaining:";
let timerMinutes = "Minutes remaining:";
clock2.textContent = timerMinutes;
clock.textContent = timerSeconds;
// Creates the pause button
let pauseButton = document.getElementById("pauseButton");
let pauseStatus = 1;
pauseButton.addEventListener('click', function(){pauseStatus += 1;
    if (pauseStatus % 2 == 0){
    clearInterval(intervalId);
    pauseButton.textContent = "Paused";
} else{
    intervalId = setInterval(beginTimerSeconds, 1000);
    pauseButton.textContent = "Pause | Resume";
}
})
// Creates the add/remove time button
let addMinute = document.getElementById("addMinute");
let minusMinute = document.getElementById("minusMinute");
addMinute.addEventListener('click', function(){timerMinutes += 1; timerSeconds +=60;});
minusMinute.addEventListener('click', function(){timerMinutes -= 1; timerSeconds -=60;});


// Creates a loop that puts all of the time buttons in an array and gives them a listener
// Additionally assigns the seconds variable based on the button pressed
function assignListeners(){
    const times = document.getElementsByClassName("time");
    for (let timeButton of times){
        timeButton.addEventListener("click", function() {
            clearInterval(intervalId);
            const seconds = Number(timeButton.textContent) * 60;
            // const minutes = Number(timeButton.textContent);
            timerSeconds = seconds;
            //I don't know what the code below does but removing it breaks the timer
            timerMinutes = timerSeconds % 60;
            clock2.textContent = timerMinutes;
            clock.textContent = timerSeconds;
            intervalId = setInterval(beginTimerSeconds, 1000);
        });
    }
}


//Begins the countdown, if the time in seconds is above zero, it will display the time and put the seconds and minutes in the html.
function beginTimerSeconds(){
    if (timerSeconds < 0){
        clearInterval(intervalId);
        formattedTime.textContent = "Time is up!"
    }
    else {
        clock.textContent = "Seconds remaining: " + (timerSeconds - 1) ;
        clock2.textContent = "Minutes remaining: " + Math.floor(timerSeconds / 60);
        timerSeconds = timerSeconds - 1;
        //Day 2 progress: I am going to make the timer display a proper countdown
        if (timerSeconds % 60 < 10){
            formattedTime.textContent = Math.floor(timerSeconds / 60) + ":0" + (timerSeconds % 60);

        } else{
        formattedTime.textContent = Math.floor(timerSeconds / 60) + ":" + (timerSeconds % 60);
        }
    }
}

//Status color indicators
function assignChangers(){
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.addEventListener("click", turnBlue);
    }
}

function turnBlue(lineNumber){
    lineNumber.target.style.backgroundColor = "#0b42d8";
    lineNumber.target.removeEventListener('click', turnBlue);
    lineNumber.target.addEventListener('click', turnGreen);
}

function turnGreen(lineNumber){
    lineNumber.target.style.backgroundColor = "#168400ff";
    lineNumber.target.removeEventListener('click',turnGreen);
    lineNumber.target.addEventListener('click', turnRed);
}

function turnRed(lineNumber){
    lineNumber.target.style.backgroundColor = "#d80b0b";
    lineNumber.target.removeEventListener('click',turnRed);
    lineNumber.target.addEventListener('click', turnBlue);
}

// Declaring the initial number of students
let numberStudents = 22;

// Creates button to add student
let addStudentButton = document.getElementById('addStudent');
addStudentButton.addEventListener('click',addStudent);

// Button to increase the number of students
let statusContainer = document.querySelector('.statusContainer');

function addStudent(){
    const newStudent = document.createElement('div');
    newStudent.textContent = numberStudents + 1;
    newStudent.classList.add('status');
    statusContainer.append(newStudent);
    newStudent.addEventListener('click', turnBlue);
    numberStudents += 1;
    }
