import React from 'react';
import getTitle from '../modules/getTitle';

const SearchAmazonButton: React.FC = () => {
  return (
    <>
      <span className={'m-boxDcFlatBtn m-boxDcFlatBtn--searchAmazon'}>
        <a
          href={`https://www.amazon.co.jp/s?k=${getTitle()}&i=stripbooks&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A`}
          target="_blank"
        >
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
