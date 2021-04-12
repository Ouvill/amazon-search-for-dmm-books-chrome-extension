import React from 'react';
import { render } from 'react-dom';
import SearchAmazonButton from './components/OpenAmazonButton';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

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

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (isDetailPage(location.pathname)) {
  sleep(500).then(() => {
    setOpenAmazonButton();
  });
} else {
}
