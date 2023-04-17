var timerInterval;
var startTime;
var elapsedTime = 0;
var running = false;

function startTimer() {
  if (!running) {
    var inputTime = document.getElementById('inputTime').value;
    if (inputTime) {
      startTime = new Date().getTime();
      elapsedTime = inputTime * 1000; // Convertir a milisegundos
      timerInterval = setInterval(updateTimer, 10); // Actualizar cada 10 milisegundos
      running = true;
    }
  }
}

function updateTimer() {
  var currentTime = new Date().getTime();
  var remainingTime = elapsedTime - (currentTime - startTime);
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    running = false;
    document.getElementById('timer').innerHTML = '00:00:00';
  } else {
    var hours = Math.floor(remainingTime / 3600000);
    var minutes = Math.floor((remainingTime % 3600000) / 60000);
    var seconds = Math.floor((remainingTime % 60000) / 1000);
    var timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('timer').innerHTML = timeString;
  }
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function pauseTimer() {
  clearInterval(timerInterval);
  running = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  document.getElementById('timer').innerHTML = '00:00:00';
  document.getElementById('inputTime').value = '';
}
