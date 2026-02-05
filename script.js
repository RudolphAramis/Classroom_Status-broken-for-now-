
//Day X: This is now a living document. I will no longer record daily changes. GitHub pages broke this, and support didn't help me, so I am having to look into what I can do about this.
// Page setup
let clock = document.getElementById("time");
let clock2 = document.getElementById("timeMinutes");
let formattedTime = document.getElementById("formattedTime");
let intervalId = null;
assignListeners();
assignChangers();
directionsEditable();
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
    clearInterval(intervalId);
    intervalId = setInterval(beginTimerSeconds, 1000);
    pauseButton.textContent = "Pause | Resume";
}
})
// Creates the add/remove time button
let addMinute = document.getElementById("addMinute");
let minusMinute = document.getElementById("minusMinute");
addMinute.addEventListener('click', function(){timerMinutes += 1; timerSeconds +=60; 
    clock.textContent = "Seconds remaining: " + timerSeconds;
    });
minusMinute.addEventListener('click', function(){timerMinutes -= 1; timerSeconds -=60;
    clock.textContent = "Seconds remaining: " + timerSeconds;
});


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
            timerMinutes = timerSeconds % 60;
            clock2.textContent = timerMinutes;
            clock.textContent = timerSeconds;
            intervalId = setInterval(beginTimerSeconds, 1000);
            pauseButton.textContent = "Pause | Resume";
            pauseStatus = 1;
        });
    }
}


//Begins the countdown, if the time in seconds is above zero, it will display the time and put the seconds and minutes in the html.
function beginTimerSeconds(){
    if (timerSeconds <= 0){
        formattedTime.textContent = "Time is up!";
        clearInterval(intervalId);

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

// Creates button to remove student
let removeStudentButton = document.getElementById('removeStudent');
removeStudentButton.addEventListener('click',removeStudent);

// Button to increase the number of students, modified to include the status border colors
let statusContainer = document.querySelector('.statusContainer');

function addStudent(){
    const newStudent = document.createElement('div');
    newStudent.textContent = numberStudents + 1;
    newStudent.classList.add('status');
    statusContainer.append(newStudent);
    newStudent.addEventListener('click', turnBlue);
    numberStudents += 1;
    changeTheme();
    }
// Button to decrease the number of students
function removeStudent(){
    const removedStudent = statusContainer.lastElementChild;
    if (removedStudent == null){
        return;
    } else {
    statusContainer.removeChild(removedStudent);
    numberStudents -= 1;
    }
}

// Making the color/status meanings editable for use in various contexts
function directionsEditable(){
    const directions = document.getElementsByClassName("directions");
    for (let step of directions){
        step.addEventListener('click', function(){
            newStep = prompt("What would you like this color to mean?");
            if (newStep !== null){
                step.textContent = newStep + " ✎";
            }
        });
    }
}

// Creates the themes. If a theme is selected from a previous session, loads that theme
const currentTheme = document.getElementById("presetThemes");
currentTheme.addEventListener('change',changeTheme);
currentTheme.value = localStorage.getItem('savedTheme');
changeTheme();

function changeTheme(){
    let themeSelected = currentTheme.value;
    if (themeSelected == "defaultTheme"){
        applyDefaultTheme();
    }
    else if (themeSelected == "quietEveningTheme"){
        applyQuietEveningTheme();
    }
    else if (themeSelected == "velvetRoseTheme"){
        applyVelvetRoseTheme();
    }
    else if (themeSelected == "firstStarsTheme"){
        applyFirstStarsTheme();
    }
    else if (themeSelected == "camelliaTheme"){
        applyCamelliaTheme();
    }
    localStorage.setItem("savedTheme", themeSelected);
}

function applyDefaultTheme(){
    document.body.style.backgroundColor = "#75cfc9";
    document.body.style.color = "#000000";
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.style.borderColor = "#ffffff";

    }
}

function applyQuietEveningTheme(){
    document.body.style.backgroundColor = "#4a3e5f";
    document.body.style.color = "#dad2b7";
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.style.borderColor = "#dad2b7";

    }
}

function applyVelvetRoseTheme(){
    document.body.style.backgroundColor = "#820808";
    document.body.style.color = "#FFFFFF";
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.style.borderColor = "#D4AF37";

    }
}

function applyFirstStarsTheme(){
    document.body.style.backgroundColor = "#2d326e";
    document.body.style.color = "#FFFFFF";
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.style.borderColor = "#ffffff"

    }
}

function applyCamelliaTheme(){
    document.body.style.backgroundColor = "#fb9ed6";
    document.body.style.color = "#ffffff";
    const statuses = document.getElementsByClassName("status");
    for (let lineNumber of statuses){
        lineNumber.style.borderColor = "#ffffff";

    }
}