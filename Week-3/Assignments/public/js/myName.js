const input = $('input');
const btn = $('button');
const form = $('form');

btn.on('click', async () => {
  const name = input.val();
  form.attr('action', `/trackName?name=${name}`);
});
