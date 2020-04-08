function cur_slide(e){
	var el = e.target.closest('.btn-item');//вызов до родителя .btn-item
	var ind = btnArr.indexOf(el);
	if(el.tagName != 'DIV') return;//Если child .btn-item, то вызваем сам .btn-item

	for (var index = 0; index < btn.length; index++) {
		btn[index].classList.remove('active-btn');
		slides[index].classList.remove('active-slide');
	}

	slides[ind].classList.add('active-slide');
	this.classList.add('active-btn');
}

var btn = document.querySelectorAll('.btn-item');
var btnArr = [];
var slides = document.querySelectorAll('.slide');

for (var i = 0; i < btn.length; i++) {
	btnArr.push(btn[i]);
	btn[i].addEventListener('click',cur_slide,false);
}

