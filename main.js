var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function nameNote() {
    var nameInput = document.getElementById('nameInput').value;

    if (nameInput.length == 0) {
        nameError.innerHTML = 'name field is empty';
        return false;
    }

    if (!nameInput.match(/[a-zA-Z]{3}\s{1}[A-Za-z]/)) {
        nameError.innerHTML = 'write full name';
        return false;

    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function phoneNote() {
    var phoneInput = document.getElementById('phoneInput').value;

    if (phoneInput.length == 0) {
        phoneError.innerHTML = 'phone field is empty';
        return false;
    }

    if (phoneInput.length !== 10) {
        phoneError.innerHTML = 'phone No must be 10 digits';
        return false;
    }

    if (!phoneInput.match(/[0-9]{10}/)) {
        phoneError.innerHTML = 'digits only';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function emailNote() {
    var emailInput = document.getElementById('emailInput').value;

    if (emailInput.length == 0) {
        emailError.innerHTML = 'email field cannot be empty';
        return false;
    }

    if (!emailInput.match(/^[A-Za-z\.\_\-[0-9]*[@][A-Za-z]*\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function messageNote() {
    var messageInput = document.getElementById('messageInput').value;
    var required = 30;
    var left = required - messageInput.length;

    if (messageInput.length == 0) {
        messageError.innerHTML = 'message field cannot be empty';
        return false;
    }

    if (messageInput.length < required) {
        messageError.innerHTML = left + ' ' + 'more characters is required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function submitCheck() {
    var submitError = document.getElementById('submit-error');

    if (!nameNote() || !phoneNote() || !emailNote() || !messageNote()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Pls fix error before submitting!';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }

}
