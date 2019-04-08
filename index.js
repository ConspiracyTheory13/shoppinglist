// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

$(document).ready(function() {
    $("#js-shopping-list-form").on('submit', function(e){
      	let text = $('#shopping-list-entry').val();
        let buttonLabelOpen ='<span class="shopping-item">'
        let buttonLabelClose = '</span>';
        let itemControls= '<div class="shopping-item-controls">'
            + '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
            + '</button>'
            + '<button class="shopping-item-delete">'
            + '<span class="button-label">delete</span>'
            + '</button> </div>';

        $('.shopping-list').append('<li>' + buttonLabelOpen + text + buttonLabelClose + itemControls + '</li>');

        // $('#shopping-list-entry').val('');
        e.preventDefault();
    });

    $('.shopping-item-delete').on('click', function(e){
        $(this).parent().parent().remove();
    });
    $('.shopping-item-toggle').on('click', function(e){
        $('.shopping-item-toggle').closest('span').toggleClass();

    })
});























// $("shopping-list").on('submit', function () {
// var text = $("addtolist").val();
// $("#shopping-list-entry").append('<li>' + text + '</li>');
//   e.preventDefault();


//
// function removeItemFromList(button) {
//   $("button-label").click(".button-label");
//   $(this).remove('.shopping-item');
// }
//
// removeItemFromList();


// for removing strikethrough class  $('.shopping-item').addClass('removeClass');
// function removeItemFromList {
//   $( ".shopping-item-delete" ).click(function() {
//   $( ".shopping-item" ).remove();
// });
//
// removeItemFromList();


// });
// }
//
// document.getElementById(".shopping-item-delete").onclick = function() {myFunction()};
//
// function myFunction() {
//   document.getElementById(".shopping-item-delete").classList.toggle("show");
// }
//
// // function strikeItemFromList {
// //   $(".shopping-item-toggle").click(function() {
// //   $( this ).slideUp();
// // });
// // }
