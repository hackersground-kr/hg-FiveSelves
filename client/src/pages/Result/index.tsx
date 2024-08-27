import React, { useState } from 'react';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import MenuBar from 'components/MenuBar';
import { itemList } from 'data/itemList';
import Product from 'components/Product';

const Result = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredItems = itemList.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <_.Result_Layout>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <_.Result_ProductList>
        {filteredItems.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            grade={product.grade}
            price={Number(product.price)}
          />
        ))}
      </_.Result_ProductList>
      <MenuBar />
    </_.Result_Layout>
  );
};

export default Result;
