function addItem() {
    let inputElement = document.getElementById('newText');
    let listElement = document.getElementById('items');


    let newLiElement = document.createElement('li');
    newLiElement.innerHTML = `${inputElement.value}`;
    listElement.appendChild(newLiElement);
    inputElement.value = '';

    let deleteElement = document.createElement('span');
    deleteElement.innerHTML = '   [Delete]';
    newLiElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', function (e) {
        let parentElement = e.target.parentElement;
        parentElement.remove();
    })
}
