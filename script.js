const loginBtn = document.getElementById('login-btn');
const passwordLogin = document.getElementById('password-login');
const emailLogin = document.getElementById('email-login');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function loginAlert() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function isAgreed () {
  if(agreement.value !== null && agreement.value === '') {
    submitBtn.disabled = true;
  } else {
  submitBtn.disabled = false;
  }
}

agreement.addEventListener('input', isAgreed);

loginBtn.addEventListener('click', loginAlert);