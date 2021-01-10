function growingWord() {
    let colors = document.getElementById('colors');
    let parentElement = document.getElementById('exercise');
    let growingWord = parentElement.lastElementChild;

    if (!growingWord.style.fontSize) {
        growingWord.style.fontSize = '2px';
    } else {
        growingWord.style.fontSize = parseInt(growingWord.style.fontSize) * 2 + 'px';
    }

    let firstColor = colors.firstElementChild;
    let currentColor = firstColor.innerHTML.toLowerCase();
    growingWord.style.color = currentColor;
    colors.appendChild(firstColor);

}   