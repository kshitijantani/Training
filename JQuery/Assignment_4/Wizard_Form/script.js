var z = false;
var len = $('.container').length;
var count, fname, lname, gender, mail, cnum, bdate, sport, about, tnc, hh, zip, mon, ipd;
var pages, len, error;
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

//---------------------GET TABLE VALUES-----------------------
// created funtion to get values
function getUserValues() {

    count = $('#sno').val(); 
    fname = $('#fname').val();
    lname = $('#lname').val(); 
    zip = $('#zipc').val();
    mail = $('#mail').val(); 
    cnum = $('#cnum').val();
    mon = $('#mny').val(); 
    hh = $('#hour').val();
    ipd = $('#ipad').val(); 
    about = $('#bio').val();
    sport = $('#sport :selected').val();
    gender = $('input[type="radio"]:checked').val();
    bdate = $('input[name= bdate]').handleDtpicker('getDate');
    tnc = $("#tnc").is("input:checked") ? 'Checked' : 'Un-checked';
}

//---------------------ADD TABLE VALUES-----------------------------
// created function to add values to table
function addUserValues() {

    var count = $(".test").length + 1;
    $('.tb_data').append(`<tr class="test" ><td id = 'sno'>${count}</td><td>${fname}</td><td>${lname}</td><td>${gender}</td><td>${mail}</td><td>${cnum}</td><td>${bdate}</td><td>${sport}</td><td>${hh}</td><td>${zip}</td><td>${ipd}</td><td>${mon}</td><td>${about}</td><td>${tnc}</td><td><button class='edit'>EDIT</button></td><td><button class='delt'>DELETE</button></td></tr>`);
}

//---------------------EMPTY FIELD VALUES-----------------------------
// created function to empty inputs
function emptyFields() {
    $('#sno, #fname, #lname, #gender, #mail, #cnum, #bdate, #hour, #zipc, #mny, #ipad, #bio, #tnc').val("");
}

function isUpdate() {
    if (z == true) {
        if (len == pages + 1) {
            $(".update").show();
            $(".next,.submit").hide();
        }
        else {
            $(".update").hide();
            $(".next").show();
        }
    }
}

$(document).ready(function () {

    //---------------------Declared variables--------------------------
    $('.container,.submit,.update,.prev,.submit').hide().eq(0).show();


    // ------------------CALENDAR PLUGIN-----------------------------
    $('input[name=bdate]').appendDtpicker({
        "current": null,
        "calendarMouseScroll": true,
        "dateOnly": true,
        "timeOnly": false,
        "futureOnly": false,
        "autodateOnStart": false,
        "locale": "en",
        "dateFormat": "YY/MM/DD"
    });

    // --------------------------- STEPS button -------------------------
    $('.steps').click(function () {


        pages = $(this).index();
        len = $('.container').length;
        $('.container').hide().eq(pages).show();

        if (pages == 0) {

            $(".prev,.submit").hide();
            $(".next").show();
        }
        else if (len == pages + 1) {
            $(".next").hide();
            $(".submit, .prev").show();
        }
        else {
            $('.submit').show();
            $('.next, .prev').hide();
        }


        isUpdate();
    });


    // ------------------------- SAVE & NEXT button ----------------------
    $('.next').click(function () {

        $('.container').hide();
        if (pages == null) {
            pages = 0;
        }
        pages++;

        len = $('.container').length;

        if (pages == len - 1) {
            $('.next').hide();
            $('.submit').show();
        }
        $('.prev').show();
        $('.container').eq(pages).show();
        isUpdate();

    });


    // ---------------------------- PREVIOUS button ----------------------
    $('.prev').click(function () {

        console.log(pages)
        if (pages == 0) {
            $('.prev').hide();
        }
        $('.container').hide();

        pages--;

        $(".container").eq(pages).show();
        $('.next').show();
        $('.submit').hide();
        isUpdate();

    })


    // click event on SUBMIT button
    $('.submit').click(function () {
        if ($(".validate_form").valid() == true) {

            getUserValues();
            addUserValues();

            pages = 0
            $('.next').show();
            $('.submit').hide();
            $('.container').not($('.container').eq(pages).show()).hide();

            emptyFields();

        } else {

            error = $('input.error').first().parents('.container').index();
            pages = error;
            if (pages == 0) {
                $('.prev').hide();
            }
            $('.next').show();
            $('.submit').hide();
            $('.container').not($('.container').eq(error).show()).hide();

        }
    });

    // click event on DELETE button
    $(".tb_data").on("click", ".delt", function () {
        $(this).closest("tr").remove();
        $("table tr").each(function (x) {
            $($(this).find("td")[0]).html(x);
        });
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
            cnum: { required: true },
            zipc: "required",
            ipad: "required",
            mny: "required",
            bio: {
                required: true,
            },
            hour: { required: true, range: [1, 24] },
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

    // click event on EDIT button
    $('.tb_data').on('click', '.edit', function () {

        // pages = 0;

        // $('.submit, .prev').hide();
        // $('.next').show();
        // $('.container').eq(0).show();


        srno = $(this).closest('tr').find('td').eq(0).text();
        fname = $(this).closest('tr').find('td').eq(1).text();
        lname = $(this).closest('tr').find('td').eq(2).text();
        gender = $(this).closest('tr').find('td').eq(3).text();
        mail = $(this).closest('tr').find('td').eq(4).text();
        cnum = $(this).closest('tr').find('td').eq(5).text();
        bdate = $(this).closest('tr').find('td').eq(6).text();
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

        z = true;
        isUpdate();

    });

    // click event on UPDATE button
    $('.update').click(function () {

        // $('.submit').hide();
        // $('.prev').show();
        // updateButton();

        if ($(".validate_form").valid() == true) {

            getUserValues();
            // addUserValues();

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

            pages = 0
            emptyFields();

            $(".update").hide();
            $(".delete").removeAttr("disabled", false);
            z = false;
            isUpdate()


        } else {

            error = $('input.error').first().parents('.container').index();
            pages = error;
            $('.next').show();
            $('.submit').hide();
            $('.container').not($('.container').eq(error).show()).hide();

        }



    });

    //--------------------UPDATE BUTTON FUNCTION-----------------------
    // function updateButton() {

    //     if (pages == 0) {

    //         $(".update,.prev").hide();
    //         $('.next').show();

    //     } else if (pages == length - 1) {
    //         $('.update').hide();
    //         $('.prev, .next').show();

    //     } else {
    //         $('.update').show();
    //         $('.submit, .prev, .next').hide();
    //     }

    //     $('.container').hide().eq(pages).show();
    // }

})