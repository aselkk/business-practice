export const renderFormValidation = () => {

    document.getElementById("userName")?.addEventListener('input', function (e) {
        if (e.target.value.length >= 3) {
            document.querySelector(".userName-input-error").innerHTML = '';
            document.querySelector(".userName-form-input").style = 'background: #f2f2f2';
        }
    })

    document.getElementById("userEmail")?.addEventListener('input', function (e) {
        if (e.target.value.length >= 3) {
            document.querySelector(".userEmail-input-error").innerHTML = '';
            document.querySelector(".userEmail-form-input").style = 'background: #F2F2F2';
            document.querySelector('.form__btn').removeAttribute('disabled', '');
            document.querySelector('#form__btn').innerText = 'получить консультацию';
        }
    })

    document.getElementById("form-input-id")?.addEventListener("submit", validate);

    function validate(e) {
        e.preventDefault();

        const name = document.forms['separate-form']['userName'].value;
        const mail = document.forms['separate-form']['userEmail'].value;

        const isNameFieldValid = validateFields(name, 'userName');
        const isEmailFieldValid = validateFields(mail, 'userEmail');
        if (isNameFieldValid && isEmailFieldValid) {
            submitData();
        }
    }

    function validateFields(field, fieldName) {
        const isFieldEmpty = field.length
        const doesFieldHasThreeCharacters = field.length < 3 && field.length > 1;

        if (!isFieldEmpty) {
            document.querySelector(`.${fieldName}-input-error`).innerHTML = 'поле обязательно*';
            document.querySelector(`.${fieldName}-form-input`).style = 'border: 1px solid #ff5437';

        }

        if (doesFieldHasThreeCharacters) {
            document.querySelector(`.${fieldName}-input-error`).innerHTML = 'пожалуйста, введите более 3х символов*';
            document.querySelector(`.${fieldName}-form-input`).style = 'border: 1px solid #ff5437';
        }

        return isFieldEmpty && !doesFieldHasThreeCharacters;
    }

    function submitData() {
        document.querySelector('.form__btn').setAttribute('disabled', '');
        document.querySelector('#form__btn').innerText = 'отправлено!';

        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
    };
};