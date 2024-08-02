// Clock script
let timer;
let seconds = 0;

function startClock() {
    timer = setInterval(() => {
        seconds++;
        document.getElementById('clock').innerText = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
}

function stopClock() {
    clearInterval(timer);
    const log = document.getElementById('log');
    const newLog = document.createElement('p');
    newLog.innerText = `Study session: ${document.getElementById('clock').innerText}`;
    log.appendChild(newLog);
}

function resetClock() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById('clock').innerText = '00:00:00';}