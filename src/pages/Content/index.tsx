import React from 'react';
import { render } from 'react-dom';
import SearchAmazonButton from './components/OpenAmazonButton';

function isDetailPage(pathname: string) {
  const re = /^\/detail/;
  return re.test(pathname);
}

function setOpenAmazonButton() {
  const detailProductInfo = document.getElementsByClassName(
    'm-boxMainDetailPurchase'
  );
  if (detailProductInfo.length > 0) {
    const div = document.createElement('div');
    div.setAttribute('class', 'm-boxMainDetailPurchase__btnAddToFavorites');

    render(<SearchAmazonButton />, div);

    detailProductInfo[0].appendChild(div);
  }
}

window.addEventListener('load', (event) => {
  if (isDetailPage(location.pathname)) {
    setOpenAmazonButton();
  } else {
  }
});
