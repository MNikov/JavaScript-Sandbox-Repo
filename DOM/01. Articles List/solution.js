function createArticle() {
	let titleBox = document.getElementById('createTitle');
	let articleBox = document.getElementById('createContent');
	let articleSection = document.getElementById('articles');
	let currentHeading = document.createElement('h3');
	let currentArticle = document.createElement('p');

	if (titleBox.value !== '' && articleBox !== '') {
		currentHeading.innerHTML = titleBox.value;
		currentArticle.innerHTML = articleBox.value;
		articleSection.appendChild(currentHeading);
		articleSection.appendChild(currentArticle);
	}

	titleBox.value = '';
	articleBox.value = '';
}
