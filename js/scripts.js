jQuery(document).ready(function($) {
  $('.form-inline').submit(function(event) {
    /* Act on the event */
    event.preventDefault()
    var numb = parseInt($('input#inputs').val());
    console.log(numb);
    countr()
  });
});


var countr = function(numb) {
  for (var i = 8; i <= 16; i++) {
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
