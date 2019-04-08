// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
$("#js-shopping-list-form").on('submit', function(e){
	var text = $('#shopping-list-entry').val();
  $('shopping-list').append($('<li>').append(text));
  $('#shopping-list-entry').val('');
  e.preventDefault();
});


// $("shopping-list").on('submit', function () {
// var text = $("addtolist").val();
// $("#shopping-list-entry").append('<li>' + text + '</li>');
//   e.preventDefault();

}};



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
