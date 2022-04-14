
 // var counter = 0;
        // var interval = setInterval(function () {
        //     counter++;
        //     // Display 'counter' wherever you want to display it.
        //     if (counter == 5) {
        //         // Display a login box
        //         clearInterval(interval);
        //     }
        // }, 1000);

        var currentRow=$(this).closest("tr"); 
        var col1=currentRow.find("td:eq(0)").text(); 

        var timer2 = "02:00";
        var timer = $('sec_val').
        var interval = setInterval(function () {


            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            $('.countdown').html("Time is: </p>" + minutes + ':' + seconds);
            $('#ss').val(seconds);
            $('#mm').val(minutes)
            timer2 = minutes + ':' + seconds;
        }, 1000);


//-----------------------------------------------------------------------------------------------------------------------------------


        // var csec_interval = setInterval( function(){
        //     --c_sec;
        //     if(c_sec < 0){
        //         c_sec = 99;
        //         if (hour < 0 && min < 0 && sec < 0){
        //             clearInterval(csec_interval)
        //         }
        //     }
        //     $("th:eq(3)").text(c_sec);
        // }, 100);
        var sec_interval = setInterval(function () {

            --sec;

            // --c_sec;
            // --sec;

            // sec = (c_sec < 0) ? --sec : sec;
            // min = (sec < 0 & sec != 0) ? --min : min;
            // hour = (min < 0 & min != 0) ? --hour : hour;
            if (hour < 0 && min < 0 && sec < 0 && c_sec < 0) clearInterval(sec_interval);
            if (sec < 0) {
                if (sec < 0 && min < 0) sec = 00;
                sec = 59;
                --min;

            }
            if (min < 0) {
                if (min < 0 && hour < 0) min = 00;
                min = 59;
                --hour;
            }


            // sec = (sec < 0) ? 59 : sec;
            // min = (min < 0) ? 59 : min;
            $("th:eq(0)").text(hour);
            $("th:eq(1)").text(min);
            $("th:eq(2)").text(sec);
            $("th:eq(3)").text(c_sec);

            timer = hour + min + sec + c_sec;


        }, 1000);