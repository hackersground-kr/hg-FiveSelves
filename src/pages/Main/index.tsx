/* eslint-disable */

import React, { useState } from 'react';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Apple from 'assets/image/Apple.png';
import Product from 'components/Product';
import { itemList } from 'data/itemList';
import SmallX from 'assets/icon/SmallX';
import BottomNavigationBar from 'components/MenuBar';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [selectState, setSelectState] = useState(1);

  const imageData = [
    { label: 'Image 1', alt: 'image1', url: Apple },
    { label: 'Image 2', alt: 'image2', url: Apple },
    { label: 'Image 3', alt: 'image3', url: Apple }
  ];

  const handleChange = (index: number) => setCurrentIndex(index);

  const renderSlides = () =>
    imageData.map((image) => (
      <_.Main_Slide key={image.alt}>
        <_.Main_SlideImage src={image.url} alt={image.alt} />
        <_.Main_SlideTitle>새콤달콤한 사과는 어떠세요?</_.Main_SlideTitle>
      </_.Main_Slide>
    ));

  const renderSearchHistory = () => (
    <>
      <_.Main_Top>
        <_.Main_Latest>최근 검색어</_.Main_Latest>
        <_.Main_Erase>지우기</_.Main_Erase>
      </_.Main_Top>
      <_.Main_HistoryList>
        <_.Main_History>
          <_.Main_ProductName>풋사과</_.Main_ProductName>
          <SmallX />
        </_.Main_History>
      </_.Main_HistoryList>
    </>
  );

  const renderProductList = () => (
    <_.Main_ProductList>
      {itemList.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          title={product.title}
          grade={product.grade}
          price={product.price}
        />
      ))}
    </_.Main_ProductList>
  );

  return (
    <_.Main_Layout>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput ? (
        renderSearchHistory()
      ) : (
        <>
          <_.CustomCarousel>
            <Carousel
              showArrows={false}
              autoPlay={true}
              showThumbs={false}
              selectedItem={currentIndex}
              onChange={handleChange}
              showStatus={false}
            >
              {renderSlides()}
            </Carousel>
          </_.CustomCarousel>
          {renderProductList()}
        </>
      )}
      <BottomNavigationBar
        selectState={selectState}
        setSelectState={setSelectState}
      />
    </_.Main_Layout>
  );
};

export default Main;
