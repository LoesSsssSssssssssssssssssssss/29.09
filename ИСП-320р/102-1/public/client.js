alert('test');
let div    = document.querySelector('div');
let button = document.querySelector('button');
button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});
btn2.addEventListener('click', function() {
	fetch('/odin.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});
btn3.addEventListener('click', function() {
	fetch('/dva.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});
