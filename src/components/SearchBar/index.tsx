import React, { forwardRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as _ from './style';
import Search from 'assets/icon/Search';
import X from 'assets/icon/X';
import BackIcon from 'assets/icon/BackIcon';

interface OwnProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = forwardRef<HTMLInputElement, OwnProps>(
  ({ searchInput, setSearchInput }, ref) => {
    const navigate = useNavigate();
    const { product } = useParams<{ product: string }>();

    useEffect(() => {
      if (product) {
        setSearchInput(product);
      }
    }, [product, setSearchInput]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    };

    const handleClearInput = () => {
      setSearchInput('');
    };

    const handleSearchBarClick = () => {
      navigate('/search-history');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        navigate(`/search-result/${searchInput}`);
      }
    };

    const isSearchResult =
      window.location.pathname.startsWith('/search-result/');

    return (
      <_.SearchBar_Layout onClick={handleSearchBarClick}>
        {isSearchResult && <BackIcon />}
        <_.SearchBar_Container>
          <Search />
          <_.SearchBar_Input
            ref={ref}
            placeholder="상품명, 태그 등"
            value={searchInput}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <div onClick={handleClearInput}>
            <X />
          </div>
        </_.SearchBar_Container>
      </_.SearchBar_Layout>
    );
  }
);

export default SearchBar;
