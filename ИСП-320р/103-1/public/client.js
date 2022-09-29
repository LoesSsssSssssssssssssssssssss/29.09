alert('test');
let div    = document.querySelector('div');
let button = document.querySelector('button');
button.addEventListener('click', function() {
	fetch('/handler/?num1=3&num2=5').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text; // запишем ответ сервера
		}
	);
});

