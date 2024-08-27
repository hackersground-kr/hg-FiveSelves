import React, { useEffect, useState } from 'react';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Apple from 'assets/image/Apple.png';
import Cheon from 'assets/image/Cheon.png';
import Garlic2 from 'assets/image/Garlic2.png';
import Product from 'components/Product';
import BottomNavigationBar from 'components/MenuBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface AxiosDataType {
  id: number;
  title: string;
  price: number;
  image: string;
  grade: string;
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [axiosData, setAxiosData] = useState<AxiosDataType[]>([]);

  useEffect(() => {
    axios
      .get<AxiosDataType[]>(`http://211.112.175.88:8080/post`)
      .then((response) => {
        setAxiosData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);

  console.log(axiosData);
  const imageData = [
    { label: '새콤달콤한 사과는 어떠세요?', alt: 'image1', url: Apple },
    { label: '돌하르방과 친한 천혜향도 있어요!', alt: 'image2', url: Cheon },
    { label: '달콤 쌉싸름한 마늘도 있고요,', alt: 'image3', url: Garlic2 }
  ];

  const handleChange = (index: number) => setCurrentIndex(index);

  const renderSlides = () =>
    imageData.map((image) => (
      <_.Main_Slide key={image.alt}>
        <_.Main_SlideImage src={image.url} alt={image.alt} />
        <_.Main_SlideTitle>{image.label}</_.Main_SlideTitle>
      </_.Main_Slide>
    ));

  const renderProductList = () => (
    <_.Main_ProductList>
      {axiosData.map((product, index) => (
        <div key={index} onClick={() => navigate(`/goodsDetail/${product.id}`)}>
          <Product
            image={product.image}
            title={product.title}
            grade={product.grade}
            price={product.price}
          />
        </div>
      ))}
    </_.Main_ProductList>
  );

  return (
    <_.Main_Layout>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
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
      <BottomNavigationBar />
    </_.Main_Layout>
  );
};

export default Main;
