const banner = $('.banner');
const bannerTitle = $('.banner-title');
const btn = $('button');
const cardSecond = $('.card-second');

banner.click(() => {
  bannerTitle.text('Have a Good Time!');
});

btn.click(() => {
  if (cardSecond.attr('style')) {
    cardSecond.attr('style', '');
  } else {
    cardSecond.attr('style', 'display:none');
  }
});
