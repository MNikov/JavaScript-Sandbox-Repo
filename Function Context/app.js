function solve() {
    let styleElement = document.getElementById('dropdown');
    let boxElement = document.getElementById('box');
    let ulElement = styleElement.nextElementSibling;
    let boxElementStartingBackgroundColor = boxElement.style.backgroundColor;
    let boxElementStartingColor = boxElement.style.color;

    // make the dropdown work properly
    styleElement.addEventListener('click', function () {
        if (ulElement.style.display !== 'block') {
            ulElement.style.display = 'block';
        } else {
            ulElement.style.display = 'none';
            boxElement.style.color = boxElementStartingColor;
            boxElement.style.backgroundColor = boxElementStartingBackgroundColor;
        }
    });

    // access the colours and apply them to the box
    let liElements = ulElement.children;
    for (const li of liElements) { // could assign event listener to CurrentTarget too, did
        // liElements.addEventListener('click', e => {boxElement.style.color = 'black'; boxElement.style.backgroundColor = e.target.innerHTML})
        li.addEventListener('click', (e) => {
            boxElement.style.color = 'black';
            boxElement.style.backgroundColor = e.target.innerHTML;
        })
    }
};
