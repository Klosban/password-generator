const sliderElement = document.getElementById('slider')
const buttonElement = document.getElementById('button')
const sizePassword = document.getElementById('value')
const password = document.getElementById('password')
const containerPassword = document.getElementById('container-password')
const alertCopyPassword = document.getElementById('alert')

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value
}


function passwordGenerator () {
    const charset = 'QWERTYUIOPASDFGHJKLÇZXCVBNM1234567890qwertyuiopasdfghjklçzxcvbnm'

    let generatedPassword = ''

    for (let i = 0; i < sliderElement.value; i++) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    password.innerHTML = generatedPassword
    containerPassword.classList.remove('hide')
}

function copyPassword () {
    navigator.clipboard.writeText(password.innerText)
    alertCopyPassword.classList.remove('hide')
    setTimeout(() => alertCopyPassword.classList.add('hide'), 2000)
}


