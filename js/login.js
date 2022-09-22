const showBtn = document.querySelector('.btn-show');
const hideBtn = document.querySelector('.btn-hide');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const button = document.querySelector('#login-btn');

const showPassword = () => {
  password.setAttribute('type', 'text');

  showBtn.style.display = 'none';

  hideBtn.style.display = 'block';
};

const hidePassword = () => {
  password.setAttribute('type', 'password');

  hideBtn.style.display = 'none';

  showBtn.style.display = 'block';
};

const setBtnState = () => {
  if (email.value.length > 0 && password.value.length > 0) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

showBtn.onclick = () => {
  showPassword();
};

hideBtn.onclick = () => {
  hidePassword();
};

password.addEventListener('input', () => {
  setBtnState();

  if (password.value.length < 1) {
    showBtn.style.display = 'none';
    hideBtn.style.display = 'none';
  } else if (password.getAttribute('type') !== 'password' && password.value.length > 0) {
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
  } else if (password.getAttribute('type') === 'password' && password.value.length > 0) {
    showBtn.style.display = 'block';
    hideBtn.style.display = 'none';
  }
});

email.addEventListener('input', () => {
  setBtnState();
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
