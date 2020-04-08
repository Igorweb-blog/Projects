var slider_op = document.querySelector('#slider-opinion-box');
var slide_op = document.querySelectorAll('.slider-opinion-item')[0];
var dots_op = document.querySelectorAll('.opinion-dots');
var count_op = 0;
var width_op = slide_op.clientWidth;
var i_op;
var id_op = [];

for ( i_op = 0; i_op <dots_op.length; i_op++){
	count ++;
	id_op.push(dots_op[i_op]);
	dots_op[i_op].addEventListener('click',currentSlide_op,false);
}



function currentSlide_op(e){
	var el = e.target;
	var indexDot = id_op.indexOf(el);

	for ( var i = 0; i <dots_op.length; i++){
		dots_op[i].classList.remove('active-opinion');
	}

	this.classList.add('active-opinion');

	slider_op.style.transform = 'translateX(' + (-width* indexDot) + 'px)';
	slider_op.style.transition = 0.5 + 's' + ' ' + 'ease';
	
	console.group('Слайдер команды');
	console.log(width);
	console.log('dot index: ' + indexDot);
	console.groupEnd();
}
