$(document).ready(function() {
	var play = $('.music-type a');
	var wholeIndex = $('body');
	var mouse = $('.display-mouse');
	var musicBar = $('.music-bar');
	var name = ['龙卷风-周杰伦', '告白气球-周杰伦', '甜甜的-周杰伦', '简单爱-周杰伦', '孤独患者-陈奕迅'];
	var id = ['http://win.web.ra03.sycdn.kuwo.cn/eaab8f60c383ef67a6b73358e28acfe4/59464e2d/resource/a1/10/15/1350039900.aac', 'http://win.web.rh03.sycdn.kuwo.cn/143e415413ac2a3127b4487e699b2bef/59464e4f/resource/a2/43/30/221665476.aac', 'http://win.web.ra03.sycdn.kuwo.cn/f6690ef601a1cacce927b616271c797d/59464da9/resource/a3/7/34/586624080.aac', 'http://win.web.ra03.sycdn.kuwo.cn/20557cc1711525b54e5d022b3bf2974d/59464e97/resource/a2/48/63/31/257131110.aac', 'http://win.web.ra03.sycdn.kuwo.cn/c91401e294c7aa7d0c8c2d51ff6e9369/59464ec0/resource/a2/24/22/2717942438.aac'];
	var index = null;
	var musicTime = $('.music-time');
	var nowTimeBox = $('.current-time');
	var musciName = $('.musicN');
	var time = null;
	var timer = null;
	var audio = null;
	var audioCurrent = null;
	var audioDuration = null;
	
	
//	var arr = [];
//		getAjax(index)
//		function getAjax(index) {
//	      
//				$.ajax({
//					type: "get",
//					dataType: "jsonp",
//					url: "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+name[index],
//					jsonp: "callback",
//					success: function(data) {
//						  
//	                   arr.push(data.song[0].songid)
//	                   console.log(arr)
////	         			loadMusic()
//	         			
//					},
//					
//				})
//		}
	//	function loadMusic(){
	//		var arr2 =[];
	//		$.ajax({
	//				type: "get",
	//				dataType: "jsonp",
	//				url: "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid="+arr[0],
	//				jsonp: "callback",
	//				success: function(data) {
	//					arr2.push(data.bitrate.file_link)
	//                   
	//				},
	//			})
	//		
	//		
	//	}
	
	play.on('click', function() {
		index = $(this).index();
		if($('.audio')) {
			$('.audio').remove();

		}
		getTime()
		initAudio();
	})

	drap(mouse); //控制进度条
  	

    	var initAudio = function() { //创建一个mp3媒体；
		clearInterval(time); //清楚定时器
		musciName.html();
		audio = new Audio();
		audio.className = 'audio';
		audio.src = id[index];
		wholeIndex.append(audio);

		getTime(audio);
		totalTime(audio)
		audio.play();
		autoPlay.removeClass('icon-play').addClass('icon-pause');
		musciName.html(name[index]);

			}
	function drap(obj) { //拖拽进度条
		obj.on('mousedown', function(ev) {
			var parent = obj.parent().innerWidth();
			var x = ev.pageX - obj.position().left;
			ev.preventDefault() //阻止浏览器默认行为
			clearInterval(time);
			var mouseX = null;
			if(audio != null) {
				audioCurrent = audio.currentTime;
				$(document).on('mousemove', function(ev) {
					mouseX = ev.pageX - x;
					if(mouseX < 0) {
						mouseX = 0;
					}
					if(mouseX >= parent) {
						mouseX = parent;
					}

					obj.css({
						'left': mouseX + 'px',

					});
					musicTime.html()
					musicBar.css('width', mouseX + 'px');
					musicBar.css('transition', 'none');

					nowTimeBox.html(getSpeedTime(mouseX, parent)); //获取拖拽时的音乐时间

					ev.preventDefault() //阻止浏览器默认行为

				});
				$(document).on('mouseup', function() {
					$(document).unbind('mousemove');
					$(document).unbind('mouseup');
					var time = (mouseX / parent) * audio.duration;
					audio.currentTime = time;
					getTime()
				})
			}

		})
	}

	function getSpeedTime(mouseX, parent) { //快进的时间获取
		var time = (mouseX / parent) * audio.duration;
		time = Math.floor(parseInt(time))
		var ss = time % 60;
		var m = Math.floor(time / 60);//向下取整
		var str = '';
		if(ss < 10) {
			str = m + ":" + "0" + ss;
		}
		if(ss >= 10) {

			str = m + ":" + ss;
		}
		return str
	}
	var autoPlay = $('.play'); //音乐状态
	autoPlay.on('click', function() {
		if(audio != null) {
			if(autoPlay.hasClass('icon-play')) {

				audio.play();
				autoPlay.removeClass('icon-play').addClass('icon-pause');

			} else {
				audio.pause();
				autoPlay.removeClass('icon-pause').addClass('icon-play');

			}
		}
	})



	function getTime() { //获取媒体的时间以设置进度条长度；
		time = setInterval(function() {
			speedMusic()

			if(audio != null) { 
				if(audioCurrent == audioDuration) {
					$('.audio').remove();
					index++;
					if(index > 4) {
						index = 0
					}
					initAudio();
				}
			}
		}, 1000);
	}

	function speedMusic() { //控制进度条
		audioCurrent = audio.currentTime;
		var time = Math.floor(parseInt(audioCurrent))

		var ss = time % 60; //转为秒
		var m = Math.floor(time / 60);
		var str = '';
		if(ss < 10) {
			str = m + ":" + "0" + ss;
		}
		if(ss >= 10) {

			str = m + ":" + ss;
		}
		musicBar.css('width', (audioCurrent / audio.duration) * 100 + '%');
		musicBar.css('transition', 'width .6s ease;');
		mouse.css('left', (audioCurrent / audio.duration) * 100 + '%');
		nowTimeBox.html(str);
	}

	function totalTime() { //获取音乐总时长
		clearInterval(timer);
		timer = setInterval(function() {
			audioDuration = audio.duration;
			var second = audio.duration / 60;
			second = second.toFixed(2);
			var str = second.toString();
			var strTotal = '';
			str.split('.');
			arr = str[2] + str[3]
			if(audio.duration != NaN) {

				if(parseInt(arr) < 10) {
					strTotal = str[0] + ':' + "0" + str[3];
				}
				if(parseInt(arr) >= 10) {
					strTotal = str[0] + ':' + str[2] + str[3];
				}
				if(parseInt(arr) > 60) {
					strTotal = (parseInt(str[0]) + 1) + ':' + (parseInt(arr) - 60);
				}
				musicTime.html(strTotal);
			}

		}, 30)
	}
	//控制音乐声音
	var vCBtn = $('.volume-control');
	var icon = $('.volume-content p');
	var musicCir = $('.volume-cir')
	var mute = $('.volume')
	
 	volumeControl()//音量控制
	function volumeControl() {
		vCBtn.on('mousedown', function(ev) {
			var x = ev.pageX - icon.width();
			ev.preventDefault() //阻止浏览器默认行为
			$(document).on('mousemove', function(ev) {
				var length = ev.pageX - x
				if(length >= 90) {
					length = 90
				}
				if(length <= 0) {
					length = 0;
					mute.removeClass('icon-volume-down').addClass('icon-volume-off')
				}
				if(length > 0) {
					mute.removeClass('icon-volume-off').addClass('icon-volume-down')
				}
				if(audio != null) {
					audio.volume = length / icon.parent().width()
				}
				//				console.log(length/icon.parent().width())

				icon.css('width', length + 'px');
				ev.preventDefault() //阻止浏览器默认行为
			})
			$(document).on('mouseup', function() {
				$(document).unbind('mousemove');
				$(document).unbind('mouseup');
			})

		})
	}
	//切换歌曲
	var next = $('.forward'); //下一首
	var prev = $('.backward'); //上一首
	next.on('click', function() {
		if(audio != null) {
			$('.audio').remove();
			index++;
			if(index > 4) {
				index = 0
			}
			initAudio()
			getTime()
		}

	})
	prev.on('click', function() { //上一首
		if(audio != null) {
			$('.audio').remove();
			index--;
			if(index < 0) {
				index = 4
			}
			initAudio()
			getTime()
		}
	});

})