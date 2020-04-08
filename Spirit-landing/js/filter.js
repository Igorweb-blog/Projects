var imgs = document.querySelectorAll('.photo-item');
var buttons = document.querySelectorAll('.filter-link');
var curBtnIndex = [];

for(var i = 0; i < buttons.length; i++){
		curBtnIndex.push(buttons[i]);
		buttons[i].addEventListener('click',filter_btn,false);
	}

	function filter_btn(e){
		e.preventDefault();
		var el = e.target
		var curBtn = curBtnIndex.indexOf(el)

		for(var i = 0; i < buttons.length; i++){
		buttons[i].classList.remove('filter-active');
		}

		console.log(curBtn);
		
		for (var i = 0; i <imgs.length; i++) {
			var img = imgs[i];
			var tags = img.dataset.tags;

			if(curBtn == 0){
				img.style.display = 'block';
			}
			if(curBtn == 1){
				img.style.display = 'block';
				if(tags != 'web_design'){
					img.style.display = 'none';
				}
			}
			if(curBtn == 2){
				img.style.display = 'block';
				if(tags != 'mobile_design'){
					img.style.display = 'none';
				}
			}
			if(curBtn == 3){
				img.style.display = 'block';
				if(tags != 'photograpy'){
					img.style.display = 'none';
				}
			}

		}
	}