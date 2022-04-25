$(document).ready(function () {

    var d = new Date();
    // var bool = false;
    var noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var currentMonth, currentYear, currentDate, currentDay, firstDay, i, j, countDates, day, find_date, find_year, find_month, month, year;
    var highlight_date = 0;

    // default current year and month on display
    $('#currentMonth').text(months[d.getMonth()]);
    $('#currentYear').text(currentYear);

    function monthFeb() {
        if ((currentYear % 4 === 0 || currentYear % 400 === 0) && currentYear % 100 !== 0) {
            noOfDays[1] = 29;
        } else {
            noOfDays[1] = 28;
        }
    }

    // function for calendar
    function addCalendar() {
        currentDate = d.getDate();
        currentMonth = d.getMonth();
        currentYear = d.getFullYear();
        currentDay = d.getDay();
        countDates = 0;
        day = 0;
        
        var firstDate = new Date(currentYear, currentMonth, 1);
        firstDay = firstDate.getDay();

        newDate = new Date();

        $('#currentMonth').text(months[currentMonth]);
        $('#currentYear').text(currentYear);
        monthFeb();

        for (i = 0; i < 6; i++) {

            $('.days_table').append(`<tr class="empty_tr" >`);
            for (j = 0; j < 7; j++) {

                countDates++;
                if (firstDay < countDates) {

                    day++;
                    if (day == currentDate) {
                        $('.days_table').append(`<td class='highlight'>${day}</td>`)
                    }
                    else if (day == highlight_date ) {
                        $('.days_table').append(`<td class = 'highlight_find_date'> ${day}</td>`)
                    }
                    else if (day - 1 == noOfDays[currentMonth]) {
                        $('.days_table').append(`<td></td>`);
                        return false;
                    }
                    else {
                        $('.days_table').append(`<td>${day}</td>`)
                    }
                }
                else {
                    $('.days_table').append(`<td></td>`)
                }
            }
            $('.days_table').append(`</tr>`);
        }
    }

    // on change event for finding year
    $('#yearList').on('change', function () {
        find_year = this.value;
        console.log(find_year)

    });

    // on change event for finding month and date
    $('#monthList').on('change', function () {

        find_month = this.value;
        $("#dateList").find("option").remove();
        for (i = 0; i <= noOfDays[find_month]; i++) {
            if (i == 0) {
                $('#dateList').append(`<option disabled selected >DATE</option>`);
            }
            else {
                $('#dateList').append(`<option >${i}</option>`)
            }

        }
    });

    // loop for years list
    for (i = 1970; i < 2070; i++) {
        $('#yearList').append(`<option >${i}</option>`)
    }

    // loop for months list
    for (i = 0; i < 12; i++) {
        $('#monthList').append(`<option value = '${i}' >${months[i]}</option>`)
    }

    // display calendar
    addCalendar();
    $('.highlight').css({ 'background-color': 'rgb(202, 146, 25)' });

    // FIND DATE BUTTON
    $('#findDate').click(function () {

        find_year = $('#yearList').val();
        find_month = $('#monthList').val();
        find_date = $('#dateList').val();
        highlight_date = find_date;
        currentYear = find_year;
        currentMonth = find_month;

        $('.empty_tr').remove();
        $('td').remove();
        d = new Date(find_year,find_month, 1);
        addCalendar();
        $('.highlight_find_date').css({ 'background-color': 'rgb(245, 215, 151)' });
    })

    // TODAY BUTTON
    $('#findToday').click(function () {

        d = new Date();

        $('.empty_tr').remove();
        $('td').remove();
        addCalendar();

        $('.highlight').css({ 'background-color': 'rgb(202, 146, 25)' });

    })

    // LEFT BUTTON
    $('#leftButton').click(function () {
        d.setMonth(d.getMonth()-1)

        $('.empty_tr').remove();
        $('td').remove();
        addCalendar();

        $('#currentMonth').text(months[month]);
        $('#currentYear').text(year);

    });

    // RIGHT BUTTON
    $('#rightButton').click(function () {
        d.setMonth(d.getMonth()+1);

        $('.empty_tr').remove();
        $('td').remove();
        addCalendar();

        $('#currentMonth').text(months[currentMonth]);
        $('#currentYear').text(currentYear);
    })

})