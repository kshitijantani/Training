$(document).ready(function () {
    var hour, sec, min, c_sec = 0
    var timer;
    $("#resume").hide();
    $("#restart").hide();

    // click event on start button
    $("#start").click(function () {

        // get user input value 
        var input_val = $("#sec_val").val();

        // created variables for hours, minutes, seconds and centi-seconds
        hour = parseInt(input_val / 3600);
        min = parseInt((input_val - (hour * 3600)) / 60);
        sec = parseInt(input_val - (min * 60) - (hour * 3600));
        c_sec = 0;

        $('.para').text("Running");
        startTimer();

        $('th:eq(0)').text(hour);
        $('th:eq(1)').text(min);
        $('th:eq(2)').text(sec);
        $('th:eq(3)').text(c_sec);

        $("#start").attr("disabled", true);
        $("#restart, #resume, #pause, #stop, #reset").removeAttr("disabled");

    });

    $("#restart").click(function () {
        $("#start").hide();
        // get user input value 
        var input_val = $("#sec_val").val();
        console.log("")

        // created variables for hours, minutes, seconds and centi-seconds
        hour = parseInt(input_val / 3600);
        min = parseInt((input_val - (hour * 3600)) / 60);
        sec = parseInt(input_val - (min * 60) - (hour * 3600));
        c_sec = 0;

        $('.para').text("Running");
        startTimer();

        $('th:eq(0)').text(hour);
        $('th:eq(1)').text(min);
        $('th:eq(2)').text(sec);
        $('th:eq(3)').text(c_sec);

        $("#restart,#start").attr("disabled", true);
        $("#resume, #pause,  #stop, #reset").removeAttr("disabled");

    });

    // click event on pause button
    $("#pause").click(function () {

        clearInterval(timer);
        $("#resume").show();
        $("#start,#restart").hide();
        $("#pause").attr("disabled", true);
        $("#start, #restart, #resume, #stop, #reset").removeAttr("disabled");
        $('.para').text("Paused at:- " + $('th:eq(0)').text() + ":" + $('th:eq(1)').text() + ":" + $('th:eq(2)').text() + ":" + $('th:eq(3)').text());
        return;

    });

    // click event on resume button
    $("#resume").click(function () {

        clearInterval(timer);
        hour = $('th:eq(0)').text();
        min = $('th:eq(1)').text();
        sec = $('th:eq(2)').text();
        c_Sec = $('th:eq(3)').text();
        startTimer();
        $("#resume").attr("disabled", true);
        $("#start, #restart, #pause, #stop, #reset").removeAttr("disabled");

    })

    // click event on stop button
    $("#stop").click(function () {

        $('.para').text("Timer Stopped!");

        clearInterval(timer);
        $("#start, #resume").hide();
        $("#restart").show();
        $("#stop, #pause").attr("disabled", true);
        $("#start, #restart, #resume, #reset").removeAttr("disabled");
        return;
    });

    // click event on reset button
    $("#reset").click(function () {

        clearInterval(timer);
        var h = 0, m = 0, s = 0, c = 0;
        $('th:eq(0)').text(h);
        $('th:eq(1)').text(m);
        $('th:eq(2)').text(s);
        $('th:eq(3)').text(c);
        $("#start").show();
        $("#restart, #resume").hide();
        $(".para").text("Enter time and hit run!");
        $("#reset").attr("disabled", true);
        $("#start, #restart, #pause, #resume, #stop").removeAttr("disabled");
        return;
    });

    // create function for time interval//
    function startTimer() {

        // time interval function
        timer = setInterval(function () {
            if (c_sec > 0) {
                c_sec--;
            } else {
                c_sec = 99;
                if (sec > 0) {
                    sec--;
                } else {
                    sec = 59;
                    if (min > 0) {
                        min--;
                    } else {
                        min = 59;
                        if (hour > 0) {
                            hour--;
                        }
                        else {
                            hour, min, sec, c_sec = 0;
                            clearInterval(timer);
                            $("#start").show();
                            $("#resume").hide();
                            return;
                        }
                    }
                }
            }
            // set the values on screen
            $('th:eq(0)').text(hour);
            $('th:eq(1)').text(min);
            $('th:eq(2)').text(sec);
            $('th:eq(3)').text(c_sec);
        }, 10);
    }
});