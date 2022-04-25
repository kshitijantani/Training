$(document).ready(function () {

    // focusing on input area only
    $('body').click(function () {
        $('#user_input').focus();
    })

    // click event for getting user values
    $('.keys').click(function () {

        var index_value = $('.keys').index(this);
        var button_value = $('.keys').eq(index_value).val();
        var input_value = $('#user_input').val();

        // take input from user
        $("#user_input").val(input_value + button_value);

        // clear inputs and operations from screen
        if (button_value == "clear") {
            console.log("hello", input_value.length)

            if (input_value.length >= 1 && !(parseInt(parseFloat(button_value)) == 0)) {

                var slice_value = input_value.slice(0, input_value.length - 1)
                $("#user_input").val(slice_value);
            }
            if (input_value.length == 1) {
                $("#user_input").val("0");
            }

        } else if (button_value == 'clearAll') {

            $('#user_input').val('');
        }
        else if (button_value == '^') {
            var ans = input_value * input_value;
            $('#user_input').val(ans);
        }
        else if (button_value == '√') {
            var ans = input_value ** 0.5;
            $('#user_input').val(ans);
        }
        else if (button_value == '=') {

            // console.log(ans);
            try {
                console.log(ans, "heloe")
                var ans = eval(input_value);
                $('#user_input').val();
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
        else {
            $("#user_input").val(input_value + button_value);
        }

    });

    // click event on every butttons
    $(".keys").click(function () {
        var ans = $("#user_input").val();
        $("#user_input").val(ans);
    });

    // event function on pressing keys like "esc" and "enter"
    $("#user_input").keydown(function (event) {
        if (event.keyCode === 27) {
            $("#user_input").val("");
        }
        if (event.keyCode === 13) {
            try {
                var button_value = $("#user_input").val();
                var ans = eval(button_value);
                $("#user_input").val(ans);
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
    });
});



