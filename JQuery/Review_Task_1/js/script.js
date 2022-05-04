// Validation function using input mask plugin
function maskValidation() {
    $('input[name="companyName"]').inputmask("a{2,20}");
    $('input[name="logo"]').inputmask("aa-a{2,20}");
    $('input[name="website"]').inputmask("[w]{3}.a{3,30}.com");
    $('input[name="fullName"]').inputmask("a{2,10} a{2,20}");
    $('input[name="designation"]').inputmask("a{2,10}");
    $('input[name="contactNo"]').inputmask("99999-99999");
    $('input[name="mail"]').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    });
}
var logo, company, name, designation, number, website, mail;

// get user values from inputs
function getValues() {

    logo = $('#logo').val();
    company = $('#companyName').val();
    fname = $('#fullName').val();
    designation = $('#designation').val();
    number = $('#contactNo').val();
    website = $('#website').val();
    mail = $('#mail').val();
}

// set user values to front and back side
function setValues() {
    $('.front-logo').empty().append(`<i class='fa ${logo}'></i>`);
    $('.left-side h1').text(company);
    $('.right-side h1').text(fname);
    $('.right-side h3').text(designation);
    $('.right-side h5').eq(0).text(number);
    $('.right-side h5').eq(1).text(website);
    $('.right-side h5').eq(2).text(mail);
    $('.back h1').text(company);
}

// click event on download buttton
// will download the webpage only if validation is checked properly
$(document).on('click', '.downloadButton', function () {
    maskValidation();

    if ($(".validateForm").valid() == true) {

        let pdf = new jsPDF();
        let section = $('.front, .back');

        let page = function () {
            pdf.save('Business Card Maker.pdf');
        };
        pdf.addHTML(section, page);

    }

});

// keyup function that displays the user changes
$(document).on('keyup change', '#logo, #companyName, #fullName, #designation, #website, #contactNo, #mail', function () {

    getValues();
    setValues();
});


// Validation messages for user inputs and tabbing of tabs
$(document).ready(function () {

    // shows first content of clean and standard webpage
    $('.tab-content').hide().eq(0).show();

    // validation function called
    maskValidation();

    // validation messages
    $(".validateForm").validate({
        ignore: [],
        rules: {
            companyName: "required",
            logo: "required",
            website: "required",
            fullName: "required",
            designation: 'required',
            contactNo: 'required',
            mail: 'required',
        },
        messages: {
            companyName: "Please enter your company name",
            logo: "Please select logo",
            website: "Please enter valid URL",
            fullName: "Please enter your full name",
            designation: "Please enter your current designation",
            contactNo: "Please check your number",
            mail: "Please enter a valid email",
        }
    });

    // on click function on tabs for navigation into contents
    $('.tab').click(function () {
        tabs = $(this).index();
        len = $('.tab-content').length;
        $('.tab-content').hide().eq(tabs).show();
    })

    $('.templateDiv').on('click', function () {
        var template = $('input[type="radio"]:checked').val()
        if (template == 'CLEAN') {
            $('div .standard').hide();
            $('div .clean').show();

        } else {
            $('div .clean').hide();
            $('div .standard').show();
        }
    })

    $('#primaryColor').on('change', function () {

        var priColor = $(this).val();
        console.log(priColor, 'hii')
        $('.primaryColor').css('color', `${priColor}`)
    
    })

});