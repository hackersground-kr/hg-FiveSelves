/*eslint-disable*/
import React, { InputHTMLAttributes, useState } from 'react';
import * as _ from './style';
import Search from 'assets/icon/Search';
import X from 'assets/icon/X';
import BackIcon from 'assets/icon/BackIcon';

interface OwnProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchInput, setSearchInput }: OwnProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClearInput = () => {
    setSearchInput('');
  };

  return (
    <_.SearchBar_Layout>
      {searchInput && <BackIcon />}
      <_.SearchBar_Container>
        <Search />
        <_.SearchBar_Input
          placeholder="상품명, 태그 등"
          value={searchInput}
          onChange={handleSearch}
        />
        <div onClick={handleClearInput}>
          <X />
        </div>
      </_.SearchBar_Container>
    </_.SearchBar_Layout>
  );
};

export default SearchBar;
