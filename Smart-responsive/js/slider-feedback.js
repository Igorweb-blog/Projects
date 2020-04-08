let prev = document.getElementById('prevSlide');
let next = document.getElementById('nextSlide');
let slideLine = document.getElementById('wrapp-slider');
let currentSlide = document.getElementsByClassName('slider-item')[0];
let width = currentSlide.clientWidth + slideLine.clientWidth * 0.1;
let count = 0;
let trans = -width;

slideLine.style.transform =	'translateX(' + (trans) + 'px)';

prev.addEventListener('click',function prevSlide(){
	count--;
	trans += width;
	slideLine.style.transform =	'translateX(' + (trans) + 'px)';
	slideLine.style.transition = 0.2 + 's' + ' ease-in-out';
		if(count < 0){
		trans = (-width) * 4;
		slideLine.style.transform =	'translateX(' + (trans) + 'px)';
		count = 3;
	}
	return trans;
});

next.addEventListener('click',function nextSlide(){
	count++;
	trans -= width;
	slideLine.style.transform =	'translateX(' + (trans) + 'px)';
	slideLine.style.transition = 0.2 + 's' + ' ease-in-out';

	if(count > 3){
		trans = -width;
		slideLine.style.transform =	'translateX(' + (trans) + 'px)';
		count = 0;
	}
	return trans;
});

