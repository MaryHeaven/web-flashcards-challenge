const form = document.querySelector('#form1');
const start = document.querySelector('#start');
const mainButton = document.querySelector('#check').onclick = function () {
  window.location.href = 'main';
};

// const questionButton = document.querySelector('#next_questions').onclick = function () {
//   window.location.href = 'question';
// };

// start.addEventListener('submit', (event) => {
//   event.preventDefault();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    login, password, action, method,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  });
});
