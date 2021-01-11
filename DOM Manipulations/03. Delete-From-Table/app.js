function deleteByEmail() {
    let email = document.querySelector('input[name=email]').value;
    let allEmailsElement = document.querySelectorAll('#customers tbody td:nth-of-type(2)');
    let messageElement = document.querySelector('#result');
    let isDeleted = false;
    for (const customerElement of allEmailsElement) {
        if (customerElement.textContent === email) {
            customerElement.parentElement.remove();
            isDeleted = true;
            break;
        }
    }
    if (!isDeleted) {
        messageElement.innerHTML = 'Not found.'
    } else {
        messageElement.innerHTML = 'Deleted.'
    }
}
