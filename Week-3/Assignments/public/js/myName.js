const input = $('input');
const btn = $('button');

btn.on('click', async (e) => {
  const name = input.val();
  e.preventDefault();
  await $.get(`/trackName?name=${name}`);
  window.location.href = '/myName';
});
