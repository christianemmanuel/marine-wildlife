$("#nav ul li a[href^='#']").on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

});

$("#nav div div a[href^='#']").on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

});

$('#toggle_menu').click(function() {
  $('#nav').slideToggle();
});
$('#nav a').click(function() {
  $('#nav').removeAttr('style')
});


$(".species_three1, .species_three2").mouseenter(function() {
  $(".species_three1").addClass('show');
  $(".species_three2").addClass('show');
}).mouseleave(function() {
  $(".species_three1").removeClass('show');
  $(".species_three2").removeClass('show');
});