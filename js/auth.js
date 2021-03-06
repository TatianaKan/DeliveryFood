const auth = ()=> {
  const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');

const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

const closeAuth = document.querySelector('.close-auth');

const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const buttonCart = document.querySelector('.button-cart');

// console.log(buttonOut);
// console.log(userName)

const login = (user)=> {
 buttonAuth.style.display = 'none';
 buttonOut.style.display = 'flex';
 userName.style.display = 'flex';
 userName.textContent = user.login;
 modalAuth.style.display = 'none';

 buttonCart.style.display = 'flex'
}

const logout = ()=> {
  buttonAuth.style.display = 'flex';
  buttonOut.style.display = 'none';
  userName.style.display = 'none';
  userName.textContent = '';
  modalAuth.style.display = 'none';

  buttonCart.style.display = 'none'

  localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', ()=> {
  modalAuth.style.display = 'flex'
})

buttonOut.addEventListener('click', ()=> {
  logout();
})

closeAuth.addEventListener('click', ()=> {
  modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', (event)=> {
  event.preventDefault();
  
  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  localStorage.setItem('user', JSON.stringify(user));

  if (user.login !== '') {
    login(user);
  } else {
    alert('Вы не ввели логин')
  }
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')))
}

}
auth();