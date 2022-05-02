var count_parent = 0;

$(document).ready(function () {

    // add parent on webpage
    $('.addMore').click(function () {

        bootbox.confirm("Want to add more child?", function (result) {
            if (result == true) {
                $('.addRows').append(`
                    <div class="parent-box">
                        <input type="text" id='parent' placeholder="Title">
                        <button class='add-parent' type="button">Add Child</button>
                        <button class='submit-parent' type="button">Submit</button>
                        <button class='delete-parent' type="button">Delete</button>
                    </div>` );

                $('.table').append(`
                    <table class='showData'>
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                `);
            }
            else {
                return;
            }

        });

    });

})

// add child to the parent box
$(document).on('click', '.add-parent', function () {
    var index = $(this).parents('div').index();

    bootbox.confirm("Want to add child details?", (result) => {
        if (result == true) {
            $('.parent-box').eq(index).append(`
        <div class='child-details'>
        <input type='text' id='child-subtitle' placeholder='Subtitle'>
        <input type='text' id='child-value' placeholder='Value'>
        <button class='delete-details' type="button">Delete</button></div>
    `);

        } else {
            return;
        }
    });
});

// remove parent on clicking delete button
$(document).on('click', '.delete-parent', function () {

    var deleteIndex = $(this).parent().index();
    bootbox.confirm("Want to delete child?", (result) => {
        if (result == true) {
            console.log("hii", deleteIndex);
            $(this).parents('div').remove('.parent-box');
            $('.showData').eq(deleteIndex).remove();
        }
        else {
            return;
        }

    });
});

// remove child details on clicking delete button
$(document).on('click', '.delete-details', function () {

    bootbox.confirm("Want to delete child details?", (result) => {
        if (result == true) {
            $(this).parent().remove('.child-details');
        }
        else {
            return;
        }
    });
});

// submit the child values to specification table
$(document).on('click', '.submit-parent', function () {

    var parentIndex = $(this).parent().index();
    var title = $('.parent-box').eq(parentIndex).find('#parent').val();

    $('.showData').eq(parentIndex).find('thead tr').remove();
    $('.showData').eq(parentIndex).find('tbody tr').remove();

    // add parent details in table
    $('.table').find('.showdata').eq(parentIndex).find('thead').append(`
    <tr class='title' >
    <td colspan="2">${title}</td>
    </tr>
    `);

    // find length of child data added by user
    var dataLength = $(this).parent().children('.child-details').length;

    // for loop for adding number of children
    for (i = 0; i < dataLength; i++) {

        var subtitleValue = $(this).parent().children().find('#child-subtitle').eq(i).val();
        var valValue = $(this).parent().children().find('#child-value').eq(i).val();

        $('.table').find('.showdata').eq(parentIndex).find('tbody').append(`
                     <tr class='values'>
                    <td>${subtitleValue}</td>
                    <td>${valValue}</td>
                    </tr>
                `);
    }

});