function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');
    if (inputElement.value !== '') {
        let newLiElement = document.createElement('li');
        newLiElement.innerHTML = inputElement.value;
        listElement.appendChild(newLiElement);
        inputElement.value = '';
    }
}
