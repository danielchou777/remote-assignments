const banner = document.querySelector('.banner');
const bannerTitle = document.querySelector('.banner-title');
const btn = document.querySelector('button');
const cardSecond = document.querySelector('.card-second');

banner.addEventListener('click', () => {
  bannerTitle.textContent = 'Have a Good Time!';
});

btn.addEventListener('click', () => {
  if (cardSecond.getAttribute('style')) {
    cardSecond.setAttribute('style', '');
  } else {
    cardSecond.setAttribute('style', 'display:none');
  }
});
