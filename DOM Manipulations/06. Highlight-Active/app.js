function focus() {
    let inputElements = document.querySelectorAll('input[type="text"]');
    for (const inputEl of inputElements) {
        inputEl.addEventListener('focus', function (e) {
            inputEl.parentElement.className = 'focused';
        });
        inputEl.addEventListener('blur', function (e) {
            inputEl.parentElement.classList.remove('focused');
        });
    }
}