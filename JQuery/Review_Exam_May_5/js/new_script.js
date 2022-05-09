// global variable
var parentOption, userValue;

function addParent() {
    $('.display-content').append(`
    <ul class='${userValue}'>
    <li>${userValue}</li>
    <button class='edit'>Edit</button>
    <button class='remove'>Remove</button>
    </ul>`);

}
function addChild(parentOption) {
    $(`.${parentOption}`).append(`
    <ul class='${userValue}'>
    <li>${userValue}</li>
    <button class='edit'>Edit</button>
    <button class='remove'>Remove</button>
    </ul>`);

    $('#child').children().hide().find(`#${parentOption}`).show();
    // $('#child').children().not(`#${parentOption}`).remove();
    if ($('#child').children().length == 0) {
        $('#child').append(`<select id='${parentOption}'><option selected value='0'>None</option></select>`);
    }
    $(`#${parentOption}`).append(`<option id='${userValue}'> ${userValue} </option>`)

}

$(document).ready(function () {
    $('.addButton').on('click', function () {
        $('.updateButton').hide();
        userValue = $('#inputField').val();

        parentOption = $('#parent').find(':selected').val();
        if (parentOption == 0) {
            $('#parent').append(`<option>${userValue}</option>`);
            addParent();
        }
        else {
            addChild(parentOption);
            
        }
        $('#inputField').val('');
    })


})