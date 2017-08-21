var countr = function(numb) {
  for (var i = 1; i <= numb; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {

      $(".theList").append("<li>Ping Pong!</li>");

    } else if (i % 5 === 0) {
      $(".theList").append("<li>Pong</li>");
    } else if (i % 3 === 0) {

      $(".theList").append("<li>Ping</li>");

    } else {

      $(".theList").append("<li>"+i+"</li>");
    }
  }
};



jQuery(document).ready(function($) {
  $('.form-inline').submit(function(event) {
    /* Act on the event */
    event.preventDefault()
    var numb = parseInt($('input#inputs').val());
    countr(numb)

    $('.theList').text();
  });
});
