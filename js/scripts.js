var countr = function(numb) {
  for (var i = 1; i <= numb; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      alert("ping pong");

    } else if (i % 5 === 0) {

      alert("pong");
    } else if (i % 3 === 0) {


      alert("ping");
    } else {
      alert(i);
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
