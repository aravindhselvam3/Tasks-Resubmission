document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    let count = 10;

    function countdown(callback) {
        if (count > 0) {
            countdownElement.innerHTML = count;
            setTimeout(function() {
                count--;
                countdown(callback);
            }, 1000);
        } else {
            countdownElement.innerHTML = "Happy Independence Day";
            callback();
        }
    }

    countdown(function() {
        // This function will be executed after the countdown is complete
        console.log("Countdown completed.");
        // You can add any additional code here.
    });
});
