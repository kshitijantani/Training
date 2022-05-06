var userValue, customIndex, childIndex;
$(document).ready(function () {
    $(document).on('click', '.addButton', function () {
        var userValue = $('#inputField').val();

        $('#parent').trigger('change');
        $('#child').trigger('change');

        if (customIndex == 0) {

            // append parents on display side
            $('.display-content').append(`<ul class='${userValue}'>
                                <li class='parent'>${userValue}</li>
                                <button class='edit'>edit</button>
                                <button class='remove'>Remove</button>
                                </ul>`)

            // append options in drop down menu of parents
            $('#parent').append(`<option id='${userValue}'> ${userValue} </option>`)
            
        }
        else {
            
            // append drop down menu for children
            $('#child').append(`<select id='${userValue}' class='child-options'>
                                <option selected value='0'>None</option>
                                </select><br>`)

            // empty the fields inside the drop down menu
            $('.child-options').not($('.child-options').eq(0)).remove();

            // append options in drop down menu for children
            $('.child-options').append(`<option id='${userValue}'> ${userValue} </option>`)

            // append children on display side
            $('.parent').eq(customIndex - 1).parent().append(`<ul class='${userValue}'>
                            <li class='child'>${userValue}</li>
                            <button class='edit'>edit</button>
                            <button class='remove'>Remove</button>
                            </ul>`)
        }
        // empty input field everytime 
        $('#inputField').val('')
    })

    $('#child').on('change', function () {
        childIndex = $(this).val();
    })
    $('#parent').on('change', function () {
        $('#child').trigger('change');
        customIndex = $(this).val();
        if (customIndex == 0 || childIndex == null){
            $('.child-options').hide();
        }else{
            $('.child-options').show();
        }
    })
})



// on click event on edit button 
$(document).on('click', '.edit', function () {
    $(this)
})

// on click event on remove button 
$(document).on('click', '.remove', function () {
    $(this).parent().remove()
})