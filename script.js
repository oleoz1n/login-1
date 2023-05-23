const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
password_regex = /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/,
email = document.getElementById('email'),
email2 = document.getElementById('email2'),
password = document.getElementById('password'),
password2 = document.getElementById('password2'),
alert_email = document.getElementById('alert_email'),
alert_password = document.getElementById('alert_password'),
entrar = document.getElementById('entrar'),
card_entrar = document.getElementById('card_entrar'),
cadastrar = document.getElementById('cadastrar'),
card_cadastrar = document.getElementById('card_cadastrar'),
card = document.getElementById('card');
let user_password = 'souBrabo!123', user_email = 'oleoz1ncontato@gmail.com';

function validar_senha() {
    password.value == '' ? alert_password.innerText = '*Preencha esse campo' : alert_password.innerText = ''
}

function validar_email(){
    email.value == '' ? alert_email.innerText = '*Preencha esse campo' : alert_email.innerText = ''
}

function validar() {
    if(email.value == ''){
        alert_email.innerText = '*Preencha esse campo' 
    }
    else{
        if(email_regex.test(email.value)) {
            alert_email.innerText = ''
        }
        else {
            alert_email.innerText = '*Preencha corretamente' 
    }
    }
    if (password.value == ''){
        alert_password.innerText = '*Preencha esse campo' 
    }
    else {
        if(password_regex.test(password.value)){
        alert_email.innerText = ''
        }
        else {
            alert_password.innerText = '*Senha incorreta'
        }
    }
    if(password.value == user_password && email.value == user_email){
        console.log('Deu bom')
    }
}

entrar.addEventListener('click',()=>{
    if (entrar.classList.contains("select")){
    }
    else {
        entrar.classList.add("select")
        card_entrar.classList.remove("none")
        card_cadastrar.classList.add("none")
        cadastrar.classList.remove("select")
    }
})

cadastrar.addEventListener('click',()=>{
    if (cadastrar.classList.contains("select")){
    }
    else {
        entrar.classList.remove("select")
        card_entrar.classList.add("none")
        card_cadastrar.classList.remove("none")
        cadastrar.classList.add("select")
        
    }
})

function cadastro(){
    if(email2.value == ''){
        alert_email.innerText = '*Preencha esse campo' 
    }
    else{
        if(email_regex.test(email2.value)) {
            user_email = email2.value
        }
        else {
            alert_email.innerText = '*Preencha corretamente' 
    }
    }
    if (password2.value == ''){
        alert_password.innerText = '*Preencha esse campo' 
    }
    else {
        if(password_regex.test(password2.value)){
            user_password = password2.value
        }
        else {
            alert_password.innerText = '*Senha incorreta'
        }
    }
    if(password2.value != '' && email2.value != ''){
        if(email_regex.test(email2.value) && password_regex.test(password2.value)){
            entrar.classList.add("select")
            card_entrar.classList.remove("none")
            card_cadastrar.classList.add("none")
            cadastrar.classList.remove("select")
        }
    }
}