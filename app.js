const input = document.querySelector('#input');
const button = document.querySelector('.translate');
const output = document.querySelector('.output');

function clickHandler() {
	const userInput = input.value;
	const url = `https://api.funtranslations.com/translate/yoda.json?text=${userInput}`;
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			output.innerText = json.contents.translated;
		})
		.catch((e) => {
			console.log(e);
			alert('Patience you must have, my young padawan. Try again later, you should');
		});
}

button.addEventListener('click', clickHandler);
