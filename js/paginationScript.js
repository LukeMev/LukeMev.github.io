
$( "#pg1" ).click(function() {
  $(this).addClass(' active');
  $("#pg2").removeClass(' active');
  $("#pg3").removeClass(' active');
  $('.thumbnail2').removeClass(' hidden');
  $('.thumbnail3').removeClass(' hidden');
  $('.thumbnail4').removeClass(' hidden');
  $('.thumbnail5').addClass(' hidden');
  $('.thumbnail6').addClass(' hidden');
  $('.thumbnail7').addClass(' hidden');
  $('.thumbnail8').addClass(' hidden');
  $('.thumbnail9').addClass(' hidden');
  $('.thumbnail10').addClass(' hidden');
});

$( "#pg2" ).click(function() {
  $(this).addClass(' active');
  $("#pg1").removeClass(' active');
  $("#pg3").removeClass(' active');
  $('.thumbnail2').addClass(' hidden');
  $('.thumbnail3').addClass(' hidden');
  $('.thumbnail4').addClass(' hidden');
  $('.thumbnail5').removeClass(' hidden');
  $('.thumbnail6').removeClass(' hidden');
  $('.thumbnail7').removeClass(' hidden');
  $('.thumbnail8').addClass(' hidden');
  $('.thumbnail9').addClass(' hidden');
  $('.thumbnail10').addClass(' hidden');
});

$( "#pg3" ).click(function() {
  $(this).addClass(' active');
  $("#pg1").removeClass(' active');
  $("#pg2").removeClass(' active');
  $('.thumbnail2').addClass(' hidden');
  $('.thumbnail3').addClass(' hidden');
  $('.thumbnail4').addClass(' hidden');
  $('.thumbnail5').addClass(' hidden');
  $('.thumbnail6').addClass(' hidden');
  $('.thumbnail7').addClass(' hidden');
  $('.thumbnail8').removeClass(' hidden');
  $('.thumbnail9').removeClass(' hidden');
  $('.thumbnail10').removeClass(' hidden');
});