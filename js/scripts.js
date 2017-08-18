jQuery(document).ready(function($) {
  $('.form-inline').submit(function(event) {
    /* Act on the event */
    event.preventDefault()
    var numb = parseInt($('input#inputs').val());
    console.log(numb);
  });
});
