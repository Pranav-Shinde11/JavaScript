let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const beep = document.getElementById('beep');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
    isRunning = false;
});

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
        beep.play();
    }
    if (minutes >= 60) {
        minutes = 0;
        hours += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time / 10}` : time / 10;
}


document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(timer);
    } else if (isRunning) {
        timer = setInterval(updateTime, 10);
    }
});