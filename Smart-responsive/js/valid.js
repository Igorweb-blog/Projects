var submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
	e.preventDefault();
	
	var name  = document.getElementById('name');
	var mail  = document.getElementById('mail');
	var comment  = document.getElementById('comment');

	var errName = document.getElementById('errName');
	var errMail = document.getElementById('errMail');
	var errMsg = document.getElementById('errMsg');

	var errors = [];
	var success  = document.getElementById('success');

	switch (name.value.length){
		case 0:
			errName.textContent = 'Введите имя';
			errors ++;
			break;
		default:
			errName.textContent = '';
			break;
	}

	switch (mail.value.length){
		case 0:
			errMail.textContent = 'Введите email';
			errors ++;
			break;
		default:
			errMail.textContent = '';
			break;
	}

	switch (comment.value.length){
		case 0:
			errMsg.textContent = 'Введите сообщение';
			errors ++;
			break;
		default:
			errMsg.textContent = '';
			break;
	}

	if (errors == 0) {
		success.textContent = 'Сообщение отправлено';
		success.style.color = 'green';
		document.forms.feedback.reset();
	}
}, false);