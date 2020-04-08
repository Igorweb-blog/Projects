var slider_cl = document.querySelector('#slider-cl-box');
var slide_cl = document.querySelectorAll('.slider-cl-item')[0];
var dots_cl = document.querySelectorAll('.dots-cl');
var count_cl = 0;
var width_cl = slide_cl.clientWidth * 5;
var i_cl;
var id_cl = [];

for ( i_cl = 0; i_cl <dots_cl.length; i_cl++){
	count ++;
	id_cl.push(dots_cl[i_cl]);
	dots_cl[i_cl].addEventListener('click',currentSlide_cl,false);
}



function currentSlide_cl(e){
	var el = e.target;
	var indexDot = id_cl.indexOf(el);

	for ( var i = 0; i <dots_cl.length; i++){
		dots_cl[i].classList.remove('active-cl');
	}

	this.classList.add('active-cl');

	slider_cl.style.transform = 'translateX(' + (-width * indexDot) + 'px)';
	slider_cl.style.transition = 0.5 + 's' + ' ' + 'ease';
	
	console.group('Слайдер команды');
	console.log(width);
	console.log('dot index: ' + indexDot);
	console.groupEnd();
}
