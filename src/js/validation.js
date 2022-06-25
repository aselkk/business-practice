export const renderValidation = () => {

    document.getElementById("name").addEventListener('input', function (e) {
        if (e.target.value.length >= 3) {
            document.querySelector(".name-input-error").innerHTML = '';
            document.querySelector(".name-modal-input").style = 'background: #f2f2f2';
        }
    })

    document.getElementById("mail").addEventListener('input', function (e) {
        if (e.target.value.length >= 3) {
            document.querySelector(".mail-input-error").innerHTML = '';
            document.querySelector(".mail-modal-input").style = 'background: #F2F2F2';
        }
    })

    document.getElementById("text").addEventListener('input', function (e) {
        if (e.target.value.length >= 3) {
            document.querySelector(".text-input-error").innerHTML = '';
            document.querySelector(".text-modal-input").style = 'background: #F2F2F2';
        }
    })

    document.getElementById("modal-form-id").addEventListener("submit", validate);

    function validate(e) {
        e.preventDefault();

        const name = document.forms['modal-form']['user-name'].value;
        const mail = document.forms['modal-form']['user-mail'].value;
        const text = document.forms['modal-form']['text'].value;

        const isNameFieldValid = validateFields(name, 'name');
        const isEmailFieldValid = validateFields(mail, 'mail');
        const isTextFieldValid = validateFields(text, 'text');
        if (isNameFieldValid && isEmailFieldValid && isTextFieldValid) {
            submitData();
        }
    }

    function validateFields(field, fieldName) {
        const isFieldEmpty = field.length
        const doesFieldHasThreeCharacters = field.length < 3 && field.length > 1;

        if (!isFieldEmpty) {
            document.querySelector(`.${fieldName}-input-error`).innerHTML = 'поле обязательно*';
            document.querySelector(`.${fieldName}-modal-input`).style = 'border: 1px solid #ff5437';
        }

        if (doesFieldHasThreeCharacters) {
            document.querySelector(`.${fieldName}-input-error`).innerHTML = 'пожалуйста, введите более 3х символов*';
            document.querySelector(`.${fieldName}-modal-input`).style = 'border: 1px solid #ff5437';
        }

        return isFieldEmpty && !doesFieldHasThreeCharacters;
    }

    function submitData() {
        document.querySelector('.modal-btn').setAttribute('disabled', '');
        document.querySelector('#modal-btn').innerText = 'идет отправка...';
        document.querySelector('.success-text').style = 'display: none';

        const values = {
            name: document.forms['modal-form']['user-name'].value,
            mail: document.forms['modal-form']['user-mail'].value,
            text: document.forms['modal-form']['text'].value
        }

        setTimeout(() => {
            document.querySelector('.modal-btn').removeAttribute('disabled');
            document.querySelector('.success-text').style = 'display: block';
            document.querySelector('#modal-btn').innerText = 'отправить';

            document.getElementById('name').value = '';
            document.getElementById('mail').value = '';
            document.getElementById('text').value = '';

            console.log(values);
        }, 2000);

    };
};