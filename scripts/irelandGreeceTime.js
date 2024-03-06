$(document).ready(function () {
    // Function to get the current time in Ireland
    function getIrelandTime() {
        var irelandTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Dublin" });
        $(".ireland-time").text(irelandTime);
    }

    // Function to get the current time in Greece
    function getGreeceTime() {
        var greeceTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Athens" });
        $(".greece-time").text(greeceTime);
    }

    // Function to calculate the time difference between Ireland and Greece
    function calculateTimeDifference() {
        var irelandTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Dublin" });
        var greeceTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Athens" });
        var irelandTimeObj = new Date(irelandTime);
        var greeceTimeObj = new Date(greeceTime);
        var timeDifference = greeceTimeObj - irelandTimeObj;

        var hoursDiff = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesDiff = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        var timeDiffString = hoursDiff + " hours and " + minutesDiff + " minutes";

        $(".time-difference-value").text(timeDiffString);
    }

    // Update the time and time difference every second
    setInterval(function () {
        getIrelandTime();
        getGreeceTime();
        calculateTimeDifference();
    }, 1000);
});
