$(window).scroll(function() {
  if($(window).scrollTop() > $(window).height()){
  	$('.navbar-nav').removeClass('hidden');

  	$('.button-nav').removeClass('hidden');
  	$('.navbar').addClass('bg-222');
  }
  else {
  	$('.navbar-nav').addClass('hidden');
  	$('.button-nav').addClass('hidden');
  		$('.navbar').removeClass('bg-222');
  }
});