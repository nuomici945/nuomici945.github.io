$(document).ready(function(){
	var channel = $('.header-nav-left a');
	channel.on('click',function(){
		channel.removeClass('active');
		$(this).addClass('active');
	})
})
