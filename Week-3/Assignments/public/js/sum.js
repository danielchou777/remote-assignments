const input = $('input');
const btn = $('button');

btn.on('click', (e) => {
  const num = input.val();
  e.preventDefault();
  $('h3').remove();
  $('form').append('<h3>Please enter positive integer</h3>');
  $.getJSON(`/data?number=${num}`, ({ sum }) => {
    $('h3').remove();
    if (sum) {
      $('form').append(`
      <h3>The sum of 1 - ${num}  is  ${sum}</h3>
    `);
    }
  });
});
