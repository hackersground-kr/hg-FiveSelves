import React from 'react';
import * as _ from './style';
import Search from 'assets/icon/Search';
import X from 'assets/icon/X';
import BackIcon from 'assets/icon/BackIcon';

interface OwnProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>; // 추가
}

const SearchBar = ({
  searchInput,
  setSearchInput,
  setIsSearchFocused
}: OwnProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClearInput = () => {
    setSearchInput('');
  };

  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const isSearchResult = window.location.pathname === '/search-result';

  return (
    <_.SearchBar_Layout>
      {isSearchResult && <BackIcon />}
      <_.SearchBar_Container>
        <Search />
        <_.SearchBar_Input
          placeholder="상품명, 태그 등"
          value={searchInput}
          onChange={handleSearch}
          onFocus={handleFocus}
        />
        <div onClick={handleClearInput}>
          <X />
        </div>
      </_.SearchBar_Container>
    </_.SearchBar_Layout>
  );
};

export default SearchBar;
