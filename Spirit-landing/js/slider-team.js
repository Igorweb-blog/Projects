var slider = document.querySelector('#slider__box');
var slide = document.querySelectorAll('.slider-tm-item')[0];
var dots = document.querySelectorAll('.dots');
var count = 0;
var width = slide.clientWidth * 4;
var i;
var id = [];


for ( i = 0; i <dots.length; i++){
	count ++;
	id.push(dots[i]);
	dots[i].addEventListener('click',currentSlide,false);
}



function currentSlide(e){
	var el = e.target;
	var indexDot = id.indexOf(el);

	for ( var i = 0; i <dots.length; i++){
		dots[i].classList.remove('active');
	}

	this.classList.add('active');

	slider.style.transform = 'translateX(' + (-width * indexDot) + 'px)';
	slider.style.transition = 0.5 + 's' + ' ' + 'ease';
	
	console.group('Слайдер команды');
	console.log(width);
	console.log('dot index: ' + indexDot);
	console.groupEnd();
}
