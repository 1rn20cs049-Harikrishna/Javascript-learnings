let errorMessage = document.getElementById('errorMsg');
let Timing = document.getElementById('timeInSeconds');

let Hour = document.getElementById('hoursInput');
let Minute = document.getElementById('minutesInput');

let submitButton = document.getElementById('convertBtn');

let HourValue = 0;
let minuteValue = 0;
let totalTime = 0;

submitButton.addEventListener('click', function() {
    //alert(HourValue);
    if (Hour.value === '' || Minute.value === '') {
        errorMessage.innerHTML = "Please provide input";
        return;
    }
    HourValue = parseInt(Hour.value);
    minuteValue = parseInt(Minute.value);

    if (HourValue === 0 || isNaN(Hour.value)) {
        errorMessage.innerHTML = "Please enter valid number of hours.";
        errorMessage.classList.add("error-message");
        Timing.classList.add("d-none");
    } else if (minuteValue === 0 || isNaN(Minute.value)) {
        errorMessage.innerHTML = "Please enter valid number of minute.";
        errorMessage.classList.add("error-message");
        Timing.classList.add("d-none");
    } else {
        Timing.classList.remove("d-none");
        errorMessage.innerHTML = "";
        totalTime = HourValue * 3600 + minuteValue * 60;
        Timing.innerHTML = totalTime + "s";
        Timing.classList.add("output-seconds");
    }

});