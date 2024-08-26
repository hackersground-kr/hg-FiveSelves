/* eslint-disable */
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';
import DownArrow from 'assets/icon/Down.svg';

export const Layout = styled.div`
  padding: 8px 20px 114px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const GoodsFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 34px;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  background-color: ${theme.uncategorized.White};
`;
export const FooterContent = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Perchase = styled.button`
  border: none;
  background-color: ${theme.uncategorized.UpRed};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
  color: ${theme.uncategorized.White};
  font-size: 20px;
  font-weight: 700;

  &:active {
    background-color: #C62D2D;
  }
`;
export const GoodsHeader = styled.header`
  width: 100%;
`;
export const BackIconLayout = styled.div`
  display: flex;
  align-items: center;
`;
export const GoodsImgLayout = styled.div`
  margin-top: 4px;
  width: 100%;
`;
export const GoodsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const MainSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const CustomCarousel = styled.div`
  .carousel .control-dots .dot {
    background-color: rgba(255, 255, 255, 0.5);
    width: 6px;
    height: 6px;
    border-radius: 150px;
    margin: 0 5px;
  }

  .carousel .control-dots .dot.selected {
    background-color: rgba(255, 255, 255, 0.85);
    width: 6px;
    height: 6px;
  }
`;
export const GoodsInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TitleNRating = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Rating = styled.p`
  color: ${theme.grey[800]};
  font-size: 15px;
  font-weight: 400;
`;
export const Price = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 22px;
  font-weight: 700;
`;
export const Semibold = styled.span`
  font-weight: 600;
`;
export const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const KoreanTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
export const EnglishTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.grey[800]};
`;
export const CountLayout = styled.select`
  width: 100%;
  margin-top: 20px;
  display: inline-flex;
  padding: 12px 12px 12px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.grey[300]};
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  color: ${theme.uncategorized.Black};
  -webkit-appearance: none; /* 기본 스타일 제거 (iOS) */
  -moz-appearance: none; /* 기본 스타일 제거 (Firefox) */
  appearance: none;
  background-image: url(${DownArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
`;
export const CountWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const CountOption = styled.option``;
export const GoodsInfoDetail = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  border-top: 1px solid ${theme.grey[400]};
`;
export const Attribute = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.grey[100]};
  padding: 10px 0;
  width: 26%;
  font-size: 13px;
  font-weight: 400;
  color: ${theme.grey[800]};
`;
export const Content = styled.div`
  width: 74%;
  padding: 10px 0 10px 12px;
  font-size: 13px;
  font-weight: 400;
`;
