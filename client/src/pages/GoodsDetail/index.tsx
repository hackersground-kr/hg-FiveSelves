/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as S from './style';
import Bookmark from 'assets/icon/Bookmark';
import BackIcon from 'assets/icon/BackIcon';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface AxiosDataType {
  id: number;
  title: string;
  content: string;
  image: string;
  price: number;
  grade: string | null;
}

const GoodsDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goodsData, setGoodsData] = useState<AxiosDataType | null>(null);

  useEffect(() => {
    axios
      .get<AxiosDataType[]>(`http://211.112.175.88:8080/post`)
      .then((response) => {
        const data = response.data.find((item) => item.id === Number(id));
        setGoodsData(data || null);
        console.log(data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, [id]);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  if (!goodsData) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  // 가격에 콤마 추가
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(goodsData.price);

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
          ></Carousel>
        </S.CustomCarousel>
      </S.GoodsImgLayout>
      <S.MainSlide key={goodsData.image}>
        <S.GoodsImg src={goodsData.image} alt={goodsData.title} />
      </S.MainSlide>
      <S.GoodsInfo>
        <S.TitleNRating>
          <S.Rating>
            {goodsData.grade ? goodsData.grade : '등급 정보 없음'}등급
          </S.Rating>
          <S.Price>
            {formattedPrice}
            <S.Semibold>원</S.Semibold>
          </S.Price>
        </S.TitleNRating>
        <S.TitleLayout>
          <S.KoreanTitle>{goodsData.title}</S.KoreanTitle>
          <S.EnglishTitle>{goodsData.content}</S.EnglishTitle>
        </S.TitleLayout>
      </S.GoodsInfo>
      <S.CountWrapper>
        <S.CountLayout>
          <S.CountOption>수량</S.CountOption>
        </S.CountLayout>
      </S.CountWrapper>
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
