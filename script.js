const loginBtn = document.getElementById('login-btn');
const passwordLogin = document.getElementById('password-login');
const emailLogin = document.getElementById('email-login');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function loginAlert() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function isAgreed() {
  if (agreement.value !== null && agreement.value === '') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function characterCounter() {
  const characters = textArea.value;
  const contador = 500 - characters.length;
  counter.innerText = contador;
}

function getLessons() {
  const sub = document.querySelectorAll('.subject');
  const arr = [];
  for (let i = 0; i < sub.length; i += 1) {
    if (sub[i].checked) {
      arr.push(sub[i].value);
    }
  }
  return arr.join(', ');
}

function showInfo(info) {
  const main = document.querySelector('main');
  const newForm = document.createElement('form');
  newForm.id = 'form-data';
  newForm.innerHTML = info;
  main.appendChild(newForm);
}

function getFormInfo() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${name} ${lastName}\n`;
  const email = `Email: ${document.getElementById('input-email').value}\n`;
  const house = `Casa: ${document.getElementById('house').value}\n`;
  const family = `Família: ${document.querySelector('input[name="family"]:checked').value}\n`;
  const subject = `Matérias: ${getLessons()}\n`;
  const rate = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}\n`;
  const observations = `Observações: ${document.getElementById('textarea').value}`;
  return [fullName, email, house, family, subject, rate, observations];
}

function submitForm(event) {
  event.preventDefault();
  const evaluatedForm = document.getElementById('evaluation-form');
  evaluatedForm.style.display = 'none';
  const formInfo = getFormInfo().join(' ');
  showInfo(formInfo);
}

textArea.addEventListener('keyup', characterCounter);

agreement.addEventListener('input', isAgreed);

loginBtn.addEventListener('click', loginAlert);

submitBtn.addEventListener('click', submitForm);
