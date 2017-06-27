$(document).ready(function() {

//		var sUserAgent = navigator.userAgent.toLowerCase();
//		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//		var bIsAndroid = sUserAgent.match(/android/i) == "android";
//		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		var num =window.devicePixelRatio;
    	var html = window.location.href
    if(num==1){
    	if(html.slice(-10)!='index.html'){
    		window.location.href = 'index.html';
    	}
    }else{
    	if(html.slice(-11)!='mvogue.html'){
    		window.location.href = 'mvogue.html';
    	}
    }

})