const input = $('input');
const btn = $('button');

btn.on('click', (e) => {
  const num = input.val();
  e.preventDefault();

  $.getJSON(`/data?number=${num}`, ({ sum }) => {
    $('h3').remove();
    if (sum) {
      $('form').append(`
      <h3>The sum of 1 - ${num}  is  ${sum}</h3>
    `);
    }
  }).fail(() => {
    $('h3').remove();
    $('form').append('<h3>Please enter positive integer</h3>');
  });
});
