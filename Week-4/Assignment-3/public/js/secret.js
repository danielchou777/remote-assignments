const secret = $('.secret');
const btn = $('.btn');

btn.click(async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const result = await response.json();
  const img = result[0].url;
  $('img').remove();
  secret.append(`<img src='${img}' alt='cat'>`);
});
