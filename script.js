const loginBtn = document.getElementById('login-btn');
const passwordLogin = document.getElementById('password-login');
const emailLogin = document.getElementById('email-login');

function loginAlert() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', loginAlert);