var count_parent = 0;

$(document).on('click', '.jsPdf', function () {

    let pdf = new jsPDF();
    let section = $('body');

    pdf.fromHTML(section, 15, 15, {
        'width': 500
    })
    let page = function () {
        pdf.save('addMore.pdf');
    };
    pdf.addHTML(section, page);

})

$(document).ready(function () {


    // add parent on webpage
    $('.addMore').click(function () {

        bootbox.confirm("Want to add more child?", function (result) {
            if (result == true) {
                $('.addRows').append(`
                    <div class="parent-box">
                        <input type="text" id='parent' class = 'parent-class' placeholder="Title">
                        <button class='add-parent' type="button">Add Child</button>
                        <button class='delete-parent' type="button">Delete</button>
                    </div>` );

                $('.table').append(`
                    <table class='showData'>
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                `);
                // console.log($('.parent-box').parent().children().index())
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
        <input type='text' class='child-subtitle' placeholder='Subtitle'>
        <input type='text' class='child-value' placeholder='Value'>
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
    var childIndex = $('.addRows').children().eq(deleteIndex).find('.child-details').length;
    var parentDeleteIndex = $('.addRows').children().length;

    console.log(childIndex, 'childindex', parentDeleteIndex, 'parentindex')
    if (parentDeleteIndex > 1 && childIndex == 0) {

        bootbox.confirm("Want to delete child?", (result) => {
            if (result == true) {

                if (childIndex < 1 && parentDeleteIndex > 1) {
                    $(this).parents('div').remove('.parent-box');
                    $('.showData').eq(deleteIndex).remove();
                }
            }
            else {
                return;
            }

        });
    }

});

// remove child details on clicking delete button
$(document).on('click', '.delete-details', function () {


    bootbox.confirm("Want to delete child details?", (result) => {
        if (result == true) {
            var deleteIndex = $(this).parent().index();
            var childDeleteIndex = $('.delete-details').index(this);
            console.log(childDeleteIndex)
            $(this).parent().remove('.child-details');
            $('.showData').find('tbody tr').eq(childDeleteIndex).remove();

        }
        else {
            return;
        }
    });

});


// submit the child values to specification table
$(document).on('keyup', '#parent', function () {

    var parentIndex = $(this).parent().index();
    var title = $('.parent-class').eq(parentIndex).val();

    $('.showData').eq(parentIndex).find('thead tr').remove();
    $('.showData').eq(parentIndex).find('tbody tr').remove();

    if (title.length > 0) {
        // add parent details in table
        $('.table').find('.showdata').eq(parentIndex).find('thead').append(`
    <tr class='title' >
    <td colspan="2">${title}</td>
    </tr>
    `);
    }


});

$(document).on('keyup', '.child-subtitle, .child-value', function () {

    var childIndex = $(this).parents('.parent-box').index();
    var dataLength = $('.parent-box').eq(childIndex).find('.child-details').length;

    $('.showData').eq(childIndex).find('tbody tr').remove();

    // for loop for adding number of children
    for (i = 0; i < dataLength; i++) {

        console.log(dataLength)
        var subtitleValue = $('.addRows').children().eq(childIndex).children('.child-details').find('.child-subtitle').eq(i).val()
        var valValue = $('.addRows').children().eq(childIndex).children('.child-details').find('.child-value').eq(i).val()

        if (subtitleValue.length > 0 || valValue.length > 0) {
            $('.table').find('.showdata').eq(childIndex).find('tbody').append(`
                     <tr class='values'>
                    <td>${subtitleValue}</td>
                    <td>${valValue}</td>
                    </tr>
                `);
        }

    }
});

