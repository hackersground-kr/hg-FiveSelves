/* eslint-disable */
import React, { useState } from 'react';
import * as S from './style';
import Bookmark from 'assets/icon/Bookmark';
import BackIcon from 'assets/icon/BackIcon';
import Tomato1 from 'assets/image/Tomato.png';
import Tomato2 from 'assets/image/Tomato2.png'
import Tomato3 from 'assets/image/Tomato3.png'
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

const GoodsDetail = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const countData = [10, 30, 50, 100];
  const goodsInfoData = [
    { category: '상품번호', value: '9382837263529483' },
    { category: '제조사', value: '할아버지 컴퍼니' },
    { category: '상품상태', value: 'A등급' },
    { category: '원산지', value: '충청남도 아산시' }
  ];
  const imageData = [
    {
      label: 'Image 1',
      alt: 'image1',
      url: Tomato1
    },

    {
      label: 'Image 2',
      alt: 'image2',
      url: Tomato2
    },

    {
      label: 'Image 3',
      alt: 'image3',
      url: Tomato3
    }
  ];

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const renderSlides = imageData.map((image) => (
    <S.MainSlide key={image.alt}>
      <S.GoodsImg src={image.url} alt={image.alt} />
    </S.MainSlide>
  ));

  return (
    <S.Layout>
      <S.GoodsHeader>
        <S.BackIconLayout onClick={() => navigate(-1)}>
          <BackIcon />
        </S.BackIconLayout>
      </S.GoodsHeader>
      <S.GoodsImgLayout>
        <S.CustomCarousel>
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
        </S.CustomCarousel>
      </S.GoodsImgLayout>
      <S.GoodsInfo>
        <S.TitleNRating>
          <S.Rating>A등급</S.Rating>
          <S.Price>
            3,600<S.Semibold>원</S.Semibold>
          </S.Price>
        </S.TitleNRating>
        <S.TitleLayout>
          <S.KoreanTitle>할아버지가 직접 키운 토마토</S.KoreanTitle>
          <S.EnglishTitle>Produce grown by my grandfather</S.EnglishTitle>
        </S.TitleLayout>
      </S.GoodsInfo>
      <S.CountWrapper>
        <S.CountLayout>
          <S.CountOption>수량</S.CountOption>
          {countData.map((item) => (
            <S.CountOption>{item}개</S.CountOption>
          ))}
        </S.CountLayout>
      </S.CountWrapper>
      <S.GoodsInfoDetail>
        {goodsInfoData.map((item) => (
          <S.Row>
            <S.Attribute>{item.category}</S.Attribute>
            <S.Content>{item.value}</S.Content>
          </S.Row>
        ))}
      </S.GoodsInfoDetail>
      <S.GoodsFooter>
        <S.FooterContent>
          <Bookmark />
          <S.Perchase>구매</S.Perchase>
        </S.FooterContent>
      </S.GoodsFooter>
    </S.Layout>
  );
};

export default GoodsDetail;
