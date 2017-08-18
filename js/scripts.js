jQuery(document).ready(function($) {
  $('.form-inline').submit(function(event) {
    /* Act on the event */
    event.preventDefault()
    var numb = $('input#inputs').val()
    console.log(numb);
  });
});
