$(document).ready(function () {
  $('form#age').submit(function (event) {
    event.preventDefault();
    var age = parseInt($('input#ageInput').val());
    console.log(age);
    if (age >= 13) {
      $('.ve, .sc, .kc').show();
    } else if (age >= 7) {
      $('.sc, .kc').show();
    } else if (age >= 2) {
      $('.kc').show();
    } else {
      alert('You can\'t ride any rides. Sorry \:\(');
    }
  });

  $('form#age').submit(function (event) {
    event.preventDefault();
    var height = parseInt($('input#heightInput').val());
    if (height > 50) {
      $('.kc, .sc').hide();
    } else if (height > 40) {
      $('.kc').hide();
    }

  });
});
