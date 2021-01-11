function stopwatch() {
    let timerElement = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let [minutes, seconds] = timerElement.textContent.split(':').map(x => parseInt(x));

    startButton.addEventListener('click', function () {
        startButton.disabled = true;
        stopButton.disabled = false;

        let interval = setInterval(function () {
            seconds++;
            if (seconds === 59) {
                seconds = 0;
                minutes++;
                if (minutes > 59) {
                    minutes = 0;
                }
            }
            timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);

        stopButton.addEventListener('click', function () {
            clearInterval(interval);
            startButton.disabled = false;
            stopButton.disabled = true;
        })
    });
}