$(document).ready(function () {

    $('.container,.submit,.update,.prev,.submit').hide().eq(0).show();
    $('.next')
    var count,fname,lname,gender,mail,cnum,bdate,sport,about,tnc;
    var pages,length, isUpdate = false;
    // created funtion to get values
    function getUserValues() {
        fname = $('#fname').val();
        lname = $('#lname').val();
        gender = $('input[type="radio"]:checked').val();
        mail = $('#mail').val();
        cnum = $('#cnum').val();
        bdate = $('#bdate').val();
        sport = $('#sport :selected').val();
        about = $('#bio').val();
        tnc = $("#tnc").is("input:checked") ? 'Checked' : 'Un-checked';
    }

    // created funtion to add values to table
    function addUserValues() {

        var count = $("table tr").length;
        $('.tb_data').append(`<tr><td id = 'sno'>${count}</td><td>${fname}</td><td>${lname}</td><td>${gender}</td><td>${mail}</td><td>${cnum}</td><td>${bdate}</td><td>${sport}</td><td>${about}</td><td>${tnc}</td><td><button class='edit'>EDIT</button></td><td><button class='delt'>DELETE</button></td></tr>`);
    }

    function updateButton(){
        if (isUpdate == true){
            $('.update').show();
            $('.submit,.next').hide();
        }else{
            $('update').hide();
            // $('.submit').show();
        }
    }

    // click function on SAVE & NEXT button
    $('.steps').click(function () {

        pages = $(this).index();
        $('.container').hide().eq(pages).show();
        $('.submit').show();
        if (pages == 0) {
            $(".prev,.submit").hide();
            $(".next").show();
        }
        else if (length == pages + 1) {
            $(".next").hide();
            $(".submit, .prev").show();
        }
        else {
            $(".submit").hide();
            $(".next, .prev").show();
        }
        updateButton();

    });

    // click function on SAVE & NEXT button
    $('.next').click(function(){

        $('.container').hide();
        if(pages == null){
            pages = 0;
        }
        pages++;
        length = $('.container').length;
        if(pages == length -1){
            $('.next').hide();
            $('.submit').show();
        }
        $('.prev').show();
        $('.container').eq(pages).show();

        updateButton();
    });

    // click event on PREVIOUS button
    $('.prev').click(function(){
        $('.container').hide();
        pages--;
        if(pages == 0)
        {
            $('.prev').hide();
        }
        $('.container').eq(pages).show();
        $('.next').show();
        $('.submit').hide();

        updateButton();

    })

    // click event on SUBMIT button
    $('.submit').click(function () {
    
        getUserValues();
        addUserValues();
        $('form').trigger('reset');
        updateButton();
    });

    // click event on EDIT button
    $('.tb_data').on('click', '.edit', function () {

        $('.submit, .next').hide();
        $('.update, .prev').show();

        srno = $(this).closest('tr').find('td').eq(0).text();
        fname = $(this).closest('tr').find('td').eq(1).text();
        lname = $(this).closest('tr').find('td').eq(2).text();
        gender = $(this).closest('tr').find('td').eq(3).text();
        mail = $(this).closest('tr').find('td').eq(4).text();
        cnum = $(this).closest('tr').find('td').eq(5).text();
        bdate = $(this).closest('tr').find('td').eq(6).text();
        sport = $(this).closest('tr').find('td').eq(7).text();
        about = $(this).closest('tr').find('td').eq(8).text();
        tnc = $(this).closest('tr').find('td').eq(9).text();

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

        isUpdate = true;
        updateButton();
    });

    // click event on UPDATE button
    $('.update').click(function () {

        $('.submit').hide();
        $('.prev, .next').show();

        getUserValues();
        count = $("#sno").val();

        $('table tr').find(`#sno:contains(${count})`).siblings().eq(0).text(fname);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(1).text(lname);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(2).text(gender);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(3).text(mail);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(4).text(cnum);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(5).text(bdate);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(6).text(sport);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(7).text(about);
        $('table tr').find(`#sno:contains(${count})`).siblings().eq(8).text(tnc);

        isUpdate = false;
        updateButton();
        $('.update').hide();
        // $('.')

    });

    // click event on DELETE button
    $(".tb_data").on("click", ".delt", function () {
        $(this).closest("tr").remove();
        $("table tr").each(function (x) {
            $($(this).find("td")[0]).html(x);
        });
    });

})