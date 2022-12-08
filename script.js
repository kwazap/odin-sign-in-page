let submitButton = document.querySelector('button');
let pwField = document.querySelector('#password');
let pwConfirmField = document.querySelector('#pwconfirm');
let registrationForm = document.querySelector('form');
submitButton.addEventListener('click', submitCheck);

function submitCheck() {
    if (registrationForm.checkValidity()) {
        if (pwConfirmField.value == pwField.value) {
            registrationForm.submit();
        } else {
            pwField.setCustomValidity('Passwords do not match.');
            pwField.reportValidity();
        }        
    } else {
        registrationForm.reportValidity()
    }
}

pwConfirmField.addEventListener('input', (event) => {
    if (pwConfirmField.value == pwField.value) {
        pwConfirmField.setCustomValidity('');
    } else {
        pwConfirmField.setCustomValidity('Passwords do not match.');
    }
})