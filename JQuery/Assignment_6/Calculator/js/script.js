var multiple, divide, square, square_root, zero;
function calculateAns(input_value){
    try {
        
        zero = input_value.replace(/^0+[+/*%]/, '');
        multiple = zero.replace(/x/g, '*');
        divide = multiple.replace(/÷/g, '/');
        square_root = divide.replace(/²/g, '**2');
        square = square_root.replace(/√/g, '**0.5 ');
        for(i=0; i < square.length-1; i++){
            if(square.charAt(i) == '/' && square.charAt(i+1) == '/'){
                throw new Error(SyntaxError);
            }
        }

        ans = eval(square);
        $('#user_input').val(ans);
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            $('#user_input').val("Malformed expression");
        } else if (err instanceof ReferenceError) {
            $('#user_input').val("Enter number only");
        } else if (err instanceof TypeError) {
            $('#user_input').val("Malformed expression");
        } else {
            $('#user_input').val(err);
        }
    }
}

$(document).ready(function () {

    // click event on-screen keyboard
    $('.keys').click(function () {

        var index_value = $('.keys').index(this);
        var button_value = $('.keys').eq(index_value).val();
        var input_value = $('#user_input').val();
        // take input from user
        $("#user_input").val(input_value + button_value);

        // clear inputs and operations from screen
        if (button_value == "clear") {

            if (input_value.length >= 1 && !(parseInt(parseFloat(button_value)) == 0)) {

                var slice_value = input_value.slice(0, input_value.length - 1)
                $("#user_input").val(slice_value);
            }
            if (input_value.length == 0) {
                $("#user_input").val("");
            }

        }

        // clear all the values in input field
        else if (button_value == 'clearAll') {

            $('#user_input').val('');
        }

        // evaluate the operations given input fields by user
        else if (button_value == '=') {
            calculateAns(input_value);
        }

        // displays the operations in the input field
        else {
            $("#user_input").val(input_value + button_value);
        }

    });

    // click event on every butttons
    $(".keys").click(function () {
        var ans = $("#user_input").val();
        $("#user_input").val(ans);
    });

    // click event physical keyboard-------------------------------------------------------------------
    $(document).keypress(function(e){
        e.preventDefault();
    });

    // click event on every keypress
    $(document).keydown(function (event) {

        var input_value = $('#user_input').val();
    
        // console.log("ehis",$(document).find(`[data-bind-id='${event.keyCode}']`).data())
        // var a = $(document).find(`[data-bind-id='${event.keyCode}']`).data().value
        // $('#user_input').val(input_value + a)

        
        if (event.keyCode >= 96 && event.keyCode <= 105) {
            var button_value = String.fromCharCode(event.keyCode - 48)
            $('#user_input').val(input_value + button_value)
        }
        else if (event.keyCode >= 48 && event.keyCode <= 57 && event.shiftKey == false) {
            var button_value = String.fromCharCode(event.keyCode)
            $('#user_input').val(input_value + button_value)
        }
        else if(event.shiftKey == true && event.keyCode == 57){
            $('#user_input').val(input_value + '(')
        }
        else if(event.shiftKey == true && event.keyCode == 48){
            $('#user_input').val(input_value + ')')
        }
        else if((event.shiftKey == true && event.keyCode == 191) || event.keyCode == 111){
            $('#user_input').val(input_value + '/')
        }
        else if(event.shiftKey == true && event.keyCode == 222){
            $('#user_input').val(input_value + '²')
        }
        else if(event.shiftKey == false && event.keyCode == 222){
            $('#user_input').val(input_value + "√")
        }
        else if (event.keyCode == 106 || (event.shiftKey == true && event.keyCode == 56)) {
            $('#user_input').val(input_value + 'x')
        }
        else if (event.keyCode == 107 || (event.shiftKey == true && event.keyCode == 187)) {
            $('#user_input').val(input_value + '+')
        }
        else if (event.keyCode == 109 || event.keyCode == 189) {
            $('#user_input').val(input_value + '-')
        }
        else if (event.keyCode == 110 || event.keyCode == 190) {
            $('#user_input').val(input_value + '.')
        }
        else if (event.keyCode == 53 && event.shiftKey == true) {
            $('#user_input').val(input_value + '%')
        }
        else if (event.keyCode == 8) {

            if (input_value.length >= 1 && !(parseInt(parseFloat(button_value)) == 0)) {

                var slice_value = input_value.slice(0, input_value.length - 1)
                $("#user_input").val(slice_value);
            }
            if (input_value.length == 0) {
                $("#user_input").val("");
            }
        }
        else if (event.keyCode === 27) {
            $("#user_input").val("");
        }
        if (event.keyCode === 13) {
            calculateAns(input_value);
        }
    });
});


