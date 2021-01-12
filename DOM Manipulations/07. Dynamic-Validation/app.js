function validate() {
    let inputElement = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    // the code below would work with change instead of blur too
    inputElement.addEventListener('blur', function () {
        if (!pattern.test(inputElement.value)) {
            inputElement.className = 'error';
        } else {
            inputElement.classList.remove('error');
        }
    })
}