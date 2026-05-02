const time = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let seconds = 0;
let minutes = 0;
let timer = null;

function startTimer() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    let minutesTxt = minutes < 10 ? "0" + minutes : minutes;
    let secondsTxt = seconds < 10 ? "0" + seconds : seconds;

    time.innerText = `${minutesTxt} : ${secondsTxt}`;
}

startBtn.addEventListener('click', () => {
    if (timer !== null) return;
    timer = setInterval(startTimer, 1000);
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;

})

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;


    minutes = 0;
    seconds = 0;
    time.innerText = "00:00";
})