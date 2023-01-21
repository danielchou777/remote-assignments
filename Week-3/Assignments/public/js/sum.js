const input = $('input');
const btn = $('button');

btn.on('click', (e) => {
  const num = input.val();
  e.preventDefault();

  fetch(`/data?number=${num}`)
    .then((response) => response.json())
    .then(({ sum }) => {
      $('h3').remove();
      $('form').append(`
      <h3>The sum of 1 - ${num}  is  ${sum}</h3>
    `);
    })
    .catch((err) => {
      $('h3').remove();
      $('form').append('<h3>Please enter positive integer</h3>');
      console.log(err);
    });
});
