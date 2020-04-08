var elScroll = document.getElementById('scroll');

elScroll.addEventListener('click',function(){
	var winWidth = window.innerHeight;
	window.scroll(0, winWidth);
	console.group();
	console.info('winWidth: ' + winWidth);
	console.info('Текущий скрол: ' + window.pageYOffset);
	console.groupEnd();
})