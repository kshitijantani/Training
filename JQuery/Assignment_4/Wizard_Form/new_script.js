$(document).ready(function(){

    // DISPLAY PAGE
    $('.container,.submit,.update,.prev,.submit').hide().eq(0).show();

    // VARIABLES
    var serialNno, firstName, lastName, genders , mails, contactNo, birthDate, sports , aboutYourself , termsNCond, totalHours, zipCode, salary, ipAddress;
    var containerIndex, showError;
    var containerLength = $('.container').length;

    // INPUT MASK VALIDATION
    $('#CNUM').inputmask('(99) 9999[9]-9999');

})