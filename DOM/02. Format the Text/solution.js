function solve() {
    let sentences = document.getElementById('input').innerText.split('.');
    let parentDiv = document.getElementById('output')
    console.log(sentences[0]);
    while (sentences.length > 0) {
        let currentP = sentences.splice(0, 3).join('.') + '.'; // adds second dot to the final p
        let currentPElement = document.createElement('p');
        currentPElement.innerHTML = currentP;
        parentDiv.appendChild(currentPElement);
    }
}
