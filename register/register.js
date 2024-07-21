var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmpassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}
function showSuccess(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value)
        {
            isEmptyError = true;
            showError(input, 'Điển đầy đủ thông tin')
        }
        else
        {
            showSuccess(input)
        }
    });
    return isEmptyError
}
function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if(input.value.length < min)
    {
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }
    if(input.value.length > max) 
    {
        showError(input, `Không được vượt quá ${max} ký tự`)
        return true
    }
    return false
}
function checkMatchPassword(PasswordInput, cfPasswordInput) {
    if (PasswordInput.value !== cfPasswordInput)
    {
        showError(cfPasswordInput, 'Mật khâu chưa khớp. Thử lại!')
        return true
    }
    return false
}
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, password, confirmpassword])
    let isUsername = checkLengthError(username, 3, 10)
    let ispassword = checkLengthError(password, 5, 10)
    let isCheckPass = checkMatchPassword(password, confirmpassword);
})
