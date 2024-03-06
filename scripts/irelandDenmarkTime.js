$(document).ready(function () {
    // Function to get the current time in Ireland
    function getIrelandTime() {
        var irelandTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Dublin" });
        $(".ireland-time").text(irelandTime);
    }

    // Function to get the current time in Denmark
    function getDenmarkTime() {
        var denmarkTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Copenhagen" });
        $(".denmark-time").text(denmarkTime);
    }

    // Function to calculate the time difference between Ireland and Denmark
    function calculateTimeDifference() {
        var irelandTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Dublin" });
        var denmarkTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Copenhagen" });
        var irelandTimeObj = new Date(irelandTime);
        var denmarkTimeObj = new Date(denmarkTime);
        var timeDifference = denmarkTimeObj - irelandTimeObj;

        var hoursDiff = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesDiff = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        var timeDiffString = hoursDiff + " hours and " + minutesDiff + " minutes";

        $(".time-difference-value").text(timeDiffString);
    }

    // Update the time and time difference every second
    setInterval(function () {
        getIrelandTime();
        getDenmarkTime();
        calculateTimeDifference();
    }, 1000);
});
