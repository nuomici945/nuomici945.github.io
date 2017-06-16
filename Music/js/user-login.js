$(document).ready(function(){
	var login=$('.login');
	login.css('display','none');
	$('header .user-login').on('click',function(){
		login.css('display','block');
	})
	$('.close-btn').on('click',function(){
		login.css('display','none');
	})
	var loginSpan = $('.login-title span');
	loginSpan.on("click",function(){
		$(this).addClass('login-phone');
		loginSpan.not($(this)).removeClass('login-phone');
		
	})
	loginSpan.eq(1).on("click",function(){
		$('.areacode').remove();
		$('.phone').css('width','300px');
		$('.phone').attr('placeholder','请输入邮箱');
	})
	loginSpan.eq(0).on("click",function(){
		$(this).addClass('login-phone');
		loginSpan.not($(this)).removeClass('login-phone');
		var str ='<p class="areacode">+86</p> <input type="text" placeholder="请输入手机号码" name="username" class="phone">';
		$('.phone-area').html(str);
	})
})