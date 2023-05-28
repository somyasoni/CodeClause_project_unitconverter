let timerInterval;
let startTime;
let timeRemaining = null;


function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timeRemaining = getTimeRemaining();
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = null;
    document.getElementById('timer-days').textContent = '00';
    document.getElementById('timer-hours').textContent = '00';
    document.getElementById('timer-minutes').textContent = '00';
    document.getElementById('timer-seconds').textContent = '00';
}

function updateTimer() {
    const timeRemaining = getTimeRemaining();

    if (timeRemaining.total <= 0) {
        clearInterval(timerInterval);
        return;
    }

    document.getElementById('timer-days').textContent = timeRemaining.days.toString().padStart(2, '0');
    document.getElementById('timer-hours').textContent = timeRemaining.hours.toString().padStart(2, '0');
    document.getElementById('timer-minutes').textContent = timeRemaining.minutes.toString().padStart(2, '0');
    document.getElementById('timer-seconds').textContent = timeRemaining.seconds.toString().padStart(2, '0');
}

function getTimeRemaining() {
    const currentTime = new Date().getTime();
    const elapsedTime = timeRemaining !== null ? (currentTime - startTime) + timeRemaining.total : currentTime - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;
    const days = totalDays;

    return {
        total: elapsedTime,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}


document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);
