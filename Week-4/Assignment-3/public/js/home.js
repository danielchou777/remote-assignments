const loginBtn = $('.login');
const registerBtn = $('.register');
const signinEmail = $('#signin-email');
const signinPassword = $('#signin-password');
const signupEmail = $('#signup-email');
const signupPassword = $('#signup-password');
const loginForm = $('#login-form');
const registerForm = $('#register-form');

loginBtn.on('click', async (e) => {
  e.preventDefault();
  $('p').remove();
  const data = { email: signinEmail.val(), password: signinPassword.val() };
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  const { msg } = result;
  if (msg === 'success') {
    loginForm.submit();
  } else {
    const { error } = result;
    loginForm.append(`<p>${error}</p>`);
  }
});

registerBtn.on('click', async (e) => {
  e.preventDefault();
  $('p').remove();
  const data = { email: signupEmail.val(), password: signupPassword.val() };
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  const { msg } = result;
  if (msg === 'success') {
    registerForm.submit();
  } else {
    const { error } = result;
    registerForm.append(`<p>${error}</p>`);
  }
});
