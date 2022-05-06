// global variable
var inputValue, childLength, selectIndex, selectChildIndex, optionText, subChildLength, editValue, count = 0

// Add and Display main child
function setValues() {

    $('.main-ul').append(`
        <li class='list'><p>${inputValue}</p><br>
            <button class='edit'>Edit</button>
            <button class='remove'>Remove</button>
            <ul class='list-1'>
            </ul>
        </li>
    `)
}

$(document).on('click', '.addButton', function () {

    inputValue = $(':input').val();
    childLength = $('.main-ul').children().length;
    selectIndex = $("#children option:selected").index()
    selectChildIndex = $("#child option:selected").index()
    removeChild = $()
    // console.log(selectIndex, 'selectIndex')

    // main parent----------------------
    //--------------------------- if selected value is 'select-child'------------------------------
    if (selectIndex == 0) {

        setValues();
        $('#children').append(`<option class='child-option'>${inputValue}</option>`);
    }
    //--------------------------- else if value is other than ------------------------------------ 
    else if (selectIndex > 0) {

        // first child-------------------
        $('.main-ul li').eq(selectIndex - 1).find('.list-1').append(`
            <li><p>${inputValue}</p><br>
            <button class='edit'>Edit</button>
            <button class='remove'>Remove</button>
            </li>
            <ul class='list-2'>
            </ul>
        `)
        subChildLength = $('.main-ul li').eq(selectIndex).find('.list-2').length;
        $('.left-content').find('#child').remove();

        $('.left-content').append(`
            <select id="child">
            <option selected value='0'>None</option>
            </select>
        `)

        // Empty everytime the dropdown menu 
        $('#child option').not($('#child option').first()).remove()

        // Add no of children wanted to add
        $('#child').append(`<option class='child-3'>${inputValue}</option>`);

        if (selectChildIndex == selectIndex) {
            console.log('hii')
            $('.main-ul li .list-1').eq(selectChildIndex - 1).find('.list-2').append(`
            <li><p>${inputValue}</p><br>
            <button class='edit'>Edit</button>
            <button class='remove'>Remove</button>
            </li>
            <ul class='${selectChildIndex}'>
            </ul>
        `)

        }
        else {

            $('.main-ul').children().find(selectChildIndex).append(`
           
            <li><p>${inputValue}</p><br>
            <button class='edit'>Edit</button>
            <button class='remove'>Remove</button>
            </li>
        `)
        }
    }

})

// on click event on edit button 
$(document).on('click', '.edit', function () {

    $('.addButton').text('Update')
    editValue = $(this).siblings().find('p').text()
    console.log(
        $(this).siblings().find('p').text()
    )
    $(':input').val(editValue);
    $(this).siblings().eq(0).val();
    $(this).siblings().eq(0).val(editValue)
})

// on click event on remove button 
$(document).on('click', '.remove', function () {
    $(this).parent().remove()
})