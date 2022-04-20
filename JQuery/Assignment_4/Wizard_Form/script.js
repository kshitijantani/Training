$(document).ready(function () {

    //---------------------Declared variables-----------------------------------------------------
    $('.container,.submit,.update,.prev,.submit').hide().eq(0).show();
    var count, fname, lname, gender, mail, cnum, bdate, sport, about, tnc, hh, zip, mon, ipd;
    var pages, len, error, isUpdate = false;

    //---------------------Mask Plugin validation------------------
    function maskValidation() {

        $('input[name="bdate"]').mask('00/00/00', { messages: "please check the date" });
        $('input[name="zipc"]').mask('000-000');
        $('input[name="hour"]').mask('99');
        $('input[name="cnum"]').mask('00000-00000');
        $('input[name="ipad"]').mask('Z#.#.#.Z', { translation: { 'Z': { pattern: /[0-9]/, optional: true } } });
        $('input[name="mny"]').mask('##,##,##,000', { reverse: false });
    }
    maskValidation();

    // ------------------CALENDAR PLUGIN-----------------------------
    $('input[name=bdate]').appendDtpicker({
        "current": null,
        "calendarMouseScroll": true,
        "dateOnly": true,
        "futureOnly": false,
        "autodateOnStart": false,
        "locale": "en"
    });

    //---------------------GET TABLE VALUES-----------------------
    // created funtion to get values
    function getUserValues() {
        count = $('#sno').val();
        fname = $('#fname').val();
        lname = $('#lname').val();
        gender = $('input[type="radio"]:checked').val();
        mail = $('#mail').val();
        cnum = $('#cnum').val();
        sport = $('#sport :selected').val();
        hh = $('#hour').val();
        zip = $('#zipc').val();
        mon = $('#mny').val();
        ipd = $('#ipad').val();
        about = $('#bio').val();
        tnc = $("#tnc").is("input:checked") ? 'Checked' : 'Un-checked';

    }

    //---------------------ADD TABLE VALUES-----------------------------
    // created funtion to add values to table
    function addUserValues() {

        var count = $(".test").length + 1;
        $('.tb_data').append(`<tr class="test" ><td id = 'sno'>${count}</td><td>${fname}</td><td>${lname}</td><td>${gender}</td><td>${mail}</td><td>${cnum}</td><td>${bdate}</td><td>${sport}</td><td>${hh}</td><td>${zip}</td><td>${ipd}</td><td>${mon}</td><td>${about}</td><td>${tnc}</td><td><button class='edit'>EDIT</button></td><td><button class='delt'>DELETE</button></td></tr>`);
    }

    function emptyFields()
    {
        $('#sno, #fname, #lname, #gender, #mail, #cnum, #hour, #zipc, #mny, #ipad, #bio, #tnc').val("");
    }
    //--------------------UPDATE BUTTON FUNCTION-----------------------
    function updateButton() {
        if (isUpdate == true) {
            $('.update').show();
            $('.submit,.next').hide();
        } else {
            $('.update').hide();
            // $('.submit').show();
        }
    }

    // click function on STEPS button
    $('.steps').click(function () {

        pages = $(this).index();
        len = $('.container').length;
        $('.container').hide().eq(pages).show();
        $('.submit').show();

        if (pages == 0) {
            $(".prev,.submit").hide();
            $(".next").show();
        }
        else if (pages == len - 2) {

            $(".submit").hide();
            $(".next, .prev").show();
        }
        else {
            isUpdate = true;
            updateButton();
            $(".next").hide();
            $(".prev, .submit").show();
        }

    });

    $(".validate_form").validate({
        ignore: [],
        rules: {
            fname: "required",
            lname: "required",
            cnum: "required",
            bdate: "required",
            gender: { required: true, minlength: 1 },
            mail: { required: true, email: true },
            cnum: { required: true},
            zipc: "required",
            ipad: "required",
            mny: "required",
            bio: {
                required: true,
            },
            hour: { required: true, range : [1,24]},
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            gender: "Please select any one",
            mail: {
                required: "Please enter a valid email",
                email: "Enter valid email"
            },
            cnum: "Please enter your phone number",
            bdate: "Please enter valid birthdate",
            bio: {
                required: "Please enter atleast 5 letter"
            },
            hour: "Please add hours",
            mny: "Please enter 6 digit amount"
        }
    });
    // click event on SUBMIT button
    $('.submit').click(function () {
        if ($(".validate_form").valid() == true) {

            getUserValues();
            addUserValues();

            // $('label.error').text("");
            pages = 0
            $('.prev,.next').show();
            $('.submit').hide();
            $('.container').not($('.container').eq(pages).show()).hide();

            emptyFields();
            
        } else {

            error = $('input.error').first().parents('.container').index();
            $('.container').not($('.container').eq(error).show()).hide();

            pages = error;
            $('.next').hide();
            $('.submit').show();
        }
    });

    // click function on SAVE & NEXT button
    $('.next').click(function () {

        $('.container').hide();
        if (pages == null) {
            pages = 0;
        }
        pages++;
        len = $('.container').length;
        if (pages == len - 1) {
            console.log(pages)
            $('.next').hide();
            $('.submit').show();
            // updateButton();
        }
        $('.prev').show();
        $('.container').eq(pages).show();

        
    });

    // click event on PREVIOUS button
    $('.prev').click(function () {
        $('.container').hide();
        pages--;
        if (pages == 0) {
            $('.prev').hide();
        }
        $('.container').eq(pages).show();

        $('.next').show();
        $('.submit, .update').hide();

        // updateButton();

    })

    // click event on EDIT button
    $('.tb_data').on('click', '.edit', function () {

        // pages = 0;
        $('.submit, .prev').hide();
        $('.next').show();

        srno = $(this).closest('tr').find('td').eq(0).text();
        fname = $(this).closest('tr').find('td').eq(1).text();
        lname = $(this).closest('tr').find('td').eq(2).text();
        gender = $(this).closest('tr').find('td').eq(3).text();
        mail = $(this).closest('tr').find('td').eq(4).text();
        cnum = $(this).closest('tr').find('td').eq(5).text();
        bdate = $(this).closest('tr').find('td').eq(6).text();
        // console.log()
        sport = $(this).closest('tr').find('td').eq(7).text();
        hh = $(this).closest('tr').find('td').eq(8).text();
        zip = $(this).closest('tr').find('td').eq(9).text();
        mon = $(this).closest('tr').find('td').eq(10).text();
        ipd = $(this).closest('tr').find('td').eq(11).text();
        about = $(this).closest('tr').find('td').eq(12).text();
        tnc = $(this).closest('tr').find('td').eq(13).text();
        delet = $('#sno').index(this);

        $('#sno').val(srno);
        $('#fname').val(fname);
        $('#lname').val(lname);
        if (gender == 'FEMALE') {
            $('#female').prop('checked', true);
        } else if (gender == 'MALE') {
            $('#male').prop('checked', true);
        } else {
            $('#female').prop('checked', false);
            $('#male').prop('checked', false);
        }
        $('#mail').val(mail);
        $('#cnum').val(cnum);
        $('#bdate').val(bdate);
        $('#sport').val(sport);
        $('#bio').val(about);
        if (tnc == 'Checked') {
            $('#tnc').prop('checked', true);
        }
        $('#hour').val(hh);
        $('#zipc').val(zip);
        $('#mny').val(mon);
        $('#ipad').val(ipd);
        $('.delt').removeAttr('disabled');
        $(this).closest('tr').find('.delt').attr('disabled', true);

        isUpdate = true;
        updateButton();
    });

    // click event on UPDATE button
    $('.update').click(function () {

        $('.submit').hide();
        $('.prev').show();

        getUserValues();
        count = $("#sno").val();

        $('table tr').find(`#sno:contains(${count})`).siblings().eq(0).text(fname);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(1).text(lname);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(2).text(gender);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(3).text(mail);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(4).text(cnum);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(5).text(bdate);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(6).text(sport);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(7).text(hh);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(8).text(zip);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(9).text(ipd);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(10).text(mon);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(11).text(about);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(12).text(tnc);


        isUpdate = false;
        updateButton();

        // $('form').trigger('reset');
        emptyFields();
        $('.delt').removeAttr('disabled');
        $('.update').hide();

    });

    // click event on DELETE button
    $(".tb_data").on("click", ".delt", function () {
        $(this).closest("tr").remove();
        $("table tr").each(function (x) {
            $($(this).find("td")[0]).html(x);
        });
    });

    // click event on cancel button
    // $(".cancel").click(function() {
    //     validator.resetForm();
    // });

})