const start = document.querySelector('#start');
const form = document.querySelector('#form1');


// start.addEventListener('submit', (event) => {
//   event.preventDefault();

// });

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    login, password, action, method,
  } = event.target;
  console.log(login, password);

  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  });
});
