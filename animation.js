
$(window).scroll(function(){
	$('.navbar-brand').removeClass('small');
	$('.navbar').removeClass('navbar-bg');
	if($(window).scrollTop() > 100){
		$('.navbar-brand').addClass('small');
		$('.navbar').addClass('navbar-bg');
	}
});





