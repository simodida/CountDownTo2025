const container = document.querySelector('.container');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

setDate();
function setDate() {
    const dateNow = new Date().getTime();
    const dateTo2025 = new Date('Jan 05, 2022 21:52:49').getTime();
    const between = dateTo2025 - dateNow;
    const days = Math.floor(between / (1000 * 60 * 60 * 24));
    const hours = Math.floor(between % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(between % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(between % (1000 * 60) / 1000);
    daysEl.innerHTML = `${days < 10 ? `0${days}`: days}<small>Days</small>`;
    hoursEl.innerHTML = `${hours < 10 ? `0${hours}`: hours}<small>Hours</small>`;
    minutesEl.innerHTML = `${minutes < 10 ? `0${minutes}`: minutes}<small>Minutes</small>`;
    secondsEl.innerHTML = `${seconds < 10 ? `0${seconds}`: seconds}<small>Seconds</small>`;
    if(between < 0) {
        clearInterval(interval);
        container.innerHTML = `<span class="end">Brazil</span>`;
    }
}
let interval = setInterval(setDate, 1000);