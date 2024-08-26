/*eslint-disable*/
import React, { useState } from 'react';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import MenuBar from 'components/MenuBar';
import { itemList } from 'data/itemList';
import Product from 'components/Product';

const Result = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectState, setSelectState] = useState(1);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <_.Result_Layout>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <_.Result_ProductList>
        {itemList.map((product, index) => (
          <Product
            image={product.image}
            title={product.title}
            grade={product.grade}
            price={product.price}
          />
        ))}
      </_.Result_ProductList>

      <MenuBar selectState={selectState} setSelectState={setSelectState} />
    </_.Result_Layout>
  );
};

export default Result;
