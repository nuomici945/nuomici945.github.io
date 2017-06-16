$(document).ready(function(){
	var loadImg =$('.loading-animation');
	loadImg.animate({opacity:'1'},2000,function(){
		loadImg.css({'opacity':'0','display':'none'});
	})
	var musicA=$('.music');
	var musicImg =$('.music img');
	var musicBox = $('.music-img');
    var mask =$('.mask');
    var musicName =$('.music-name');
	musicA.mouseover(function(){
		    musicName.eq($(this).index()).css('color','#6ed56c');
		    mask.eq($(this).index()).css('display','block');
			musicImg.eq($(this).index()).css('display','block');
			musicImg.eq($(this).index()).addClass('filter');
			
	}).mouseout(function(){
			 mask.eq($(this).index()).css('display','none');
			musicImg.eq($(this).index()).removeClass('filter');
			musicImg.eq($(this).index()).css('display','none');
			musicName.eq($(this).index()).css('color','#666');
	});
})
