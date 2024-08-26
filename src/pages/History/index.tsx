import React, { useState, useEffect, useRef } from 'react';
import * as _ from './style';
import SmallX from 'assets/icon/SmallX';
import SearchBar from 'components/SearchBar';
import { useParams } from 'react-router-dom';

const History = () => {
  const { product } = useParams<{ product: string }>();
  const [searchInput, setSearchInput] = useState(product || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <_.History_Layout>
      <SearchBar
        ref={inputRef}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <_.History_Top>
        <_.History_Latest>최근 검색어</_.History_Latest>
        <_.History_Erase>지우기</_.History_Erase>
      </_.History_Top>
      <_.History_HistoryList>
        <_.History_History>
          <_.History_ProductName>풋사과</_.History_ProductName>
          <SmallX />
        </_.History_History>
      </_.History_HistoryList>
    </_.History_Layout>
  );
};

export default History;
