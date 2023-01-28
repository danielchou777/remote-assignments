async function ajax(src, callback) {
  // your code here
  const resp = await fetch(src);
  const data = await resp.json();
  callback(data);
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  const main = document.querySelector('main');

  for (let i = 0; i < data.length; i++) {
    const { name, price, description } = data[i];
    const productName = document.createElement('h1');
    const productPrice = document.createElement('h3');
    const productDescription = document.createElement('p');
    const article = document.createElement('article');

    productName.append(name);
    productPrice.append(`$${price}`);
    productDescription.append(description);

    article.append(productName);
    article.append(productPrice);
    article.append(productDescription);

    main.appendChild(article);
  }
}
ajax(
  'https://appworks-school.github.io/Remote-Assignment-Data/products',
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
