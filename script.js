function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 2000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});


function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    var timerId = setInterval(function () {


        hours = Math.floor((timer / 3600) % 24);
        minutes = Math.floor((timer / 60) % 60);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + "h " + minutes + "m " + seconds + "s";


        if (--timer < 0) {
            clearInterval(timerId);
        }
    }, 1000);
}

window.onload = function () {
    var countDownDate = new Date("Feb 26, 2021 21:30:00").getTime();
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    var time = (countDownDate - currentTime) / 1000;  // Tiempo en segundos
    display = document.querySelector('#time')
    startTimer(time, display);
};



