import React from 'react';
import getTitle from '../modules/getTitle';

const SearchAmazonButton: React.FC = () => {
  return (
    <>
      <span className={'m-boxDcFlatBtn m-boxDcFlatBtn--searchAmazon'}>
        <a href={`https://www.amazon.co.jp/s?k=${getTitle()}`} target="_blank">
          <span
            className={'m-boxDcFlatBtn__txt m-boxDcFlatBtn--searchAmazon__text'}
          >
            amazon で検索
          </span>
        </a>
      </span>
    </>
  );
};
export default SearchAmazonButton;
