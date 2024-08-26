/*eslint-disable*/
import React, { useState } from 'react';
import * as _ from './style';
import Search from 'assets/icon/Search';
import X from 'assets/icon/X';
import BackIcon from 'assets/icon/BackIcon';

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(true);
  return (
    <_.SearchBar_Layout>
      {isSearching && <BackIcon />}
      <_.SearchBar_Container>
        <Search />
        <_.SearchBar_Input placeholder="상품명, 태그 등" />
        <X />
      </_.SearchBar_Container>
    </_.SearchBar_Layout>
  );
};

export default SearchBar;
