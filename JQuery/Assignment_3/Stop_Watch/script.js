$(document).ready(function () {

    // hide resume and restart buttons
    $(".resume, .restart").hide();

    // variable declared for time
    var hour = 00, min = 00, sec = 00, m_sec = 00, timer, time;

    function setClockTime(a, b, c, d) {
        $('th:eq(0)').text(a);
        $('th:eq(1)').text(b);
        $('th:eq(2)').text(c);
        $('th:eq(3)').text(d);
    }
    //click event on START button
    $(".start").click(function () {

        start_watch();
        $('.para').text("Running");

        // disable buttons
        $(".start").attr("disabled", true);
        $(".restart, .resume, .pause, .stop, .reset").removeAttr("disabled");
    });

    // click event on RESTART button
    $(".restart").click(function () {

        $(".start,.resume").hide();

        setClockTime(0, 0, 0, 0);
        start_watch();
        setClockTime(hour, min, sec, m_sec);

        $(".restart,.start").attr("disabled", true);
        $(".resume, .pause, .stop, .reset").removeAttr("disabled");

    });

    //click event on RESUME button
    $(".resume").click(function () {
        
        $(".start, .restart").hide();

        clearInterval(timer);
        start_watch();

        $(".resume").attr("disabled", true);
        $(".start, .restart, .pause, .stop, .reset").removeAttr("disabled");
    })

    //click event on PAUSE button
    $(".pause").click(function () {

        // hide or show button as per use
        $(".start, .restart").hide();
        $(".resume").show();

        // print log activity 
        $('.para').text("PAUSE AT: " + $('th:eq(0)').text() + ":" + $('th:eq(1)').text() + ":" + $('th:eq(2)').text() + ":" + $('th:eq(3)').text());
        time = $('th:eq(0)').text() + ":" + $('th:eq(1)').text() + ":" + $('th:eq(2)').text() + ":" + $('th:eq(3)').text();

        clearInterval(timer);
        $("#time_sheet").prepend("<p style='color:rgb(163, 77, 51)' > PAUSE AT: " + time + "</p>")
        $(".pause").attr("disabled", true);
        $(".start, .restart, .resume, .reset").removeAttr("disabled");

    })

    //click event on STOP button
    $(".stop").click(function () {


        $(".restart").show();
        $(".resume,.start").hide();
        $('.para').text("Timer Stopped!");
        time = $('th:eq(0)').text() + ":" + $('th:eq(1)').text() + ":" + $('th:eq(2)').text() + ":" + $('th:eq(3)').text();

        clearInterval(timer);
        $("#time_sheet").prepend("<p style='color:rgb(177, 121, 18)' > STOPPED AT : " + time + "</p>")
        $(".stop, .pause").attr("disabled", true);
        $(".start, .restart, .resume, .reset").removeAttr("disabled");

        return;
    });

    // click event on RESET button
    $(".reset").click(function () {

        clearInterval(timer);
        $(".resume,.restart").hide();
        $(".start").show();
        setClockTime(0, 0, 0, 0);
        $(".para").text("Enter time and hit run!");
        $("#time_sheet").empty();
        $(".reset").attr("disabled", true);
        $(".start, .restart, .pause, .resume, .stop").removeAttr("disabled");

        return;
    })

    // created function of time intervals
    function start_watch() {

        // variable for time interval
        timer = setInterval(function () {
            if (m_sec < 99)
                m_sec++;
            else {
                m_sec = 00;
                if (sec < 59)
                    sec++;
                else {
                    sec = 00;
                    if (min < 59)
                        min++;
                    else {
                        min = 00;
                        if (hour < 24)
                            hour++;
                        else {
                            hour = 24;
                            stop();
                        }
                    }
                }
            }
            // set values of the time
            setClockTime(hour, min, sec, m_sec);
        }, 10);
    }
})