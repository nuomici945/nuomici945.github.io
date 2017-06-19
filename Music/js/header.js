$(document).ready(function(){
	var channel = $('.header-nav-left a');//改变边框指向
	channel.on('click',function(){
		channel.removeClass('active');
		$(this).addClass('active');
	})
})
