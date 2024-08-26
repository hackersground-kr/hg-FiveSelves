/*eslint-disable*/

import React, { useState } from 'react';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Apple from 'assets/image/Apple.png';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = [
    {
      label: 'Image 1',
      alt: 'image1',
      url: Apple
    },

    {
      label: 'Image 2',
      alt: 'image2',
      url: Apple
    },

    {
      label: 'Image 3',
      alt: 'image3',
      url: Apple
    }
  ];

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const renderSlides = imageData.map((image) => (
    <_.Main_Slide key={image.alt}>
      <_.Main_SlideImage src={image.url} alt={image.alt} />
      <_.Main_SlideTitle>새콤달콤한 사과는 어떠세요?</_.Main_SlideTitle>
    </_.Main_Slide>
  ));

  return (
    <_.Main_Layout>
      <SearchBar />
      <_.CustomCarousel>
        <Carousel
          showArrows={false}
          autoPlay={true}
          showThumbs={false}
          selectedItem={currentIndex}
          onChange={handleChange}
          showStatus={false}
        >
          {renderSlides}
        </Carousel>
      </_.CustomCarousel>
    </_.Main_Layout>
  );
};

export default Main;
