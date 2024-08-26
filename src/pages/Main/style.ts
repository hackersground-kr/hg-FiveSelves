/*eslint-disable*/
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Main_Layout = styled.div`
  padding: 24px 20px 0 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main_Slide = styled.div`
  position: relative;
`;

export const Main_SlideImage = styled.img`
  width: 100%;
  filter: brightness(69%);
  border-radius: 10px;
`;

export const Main_SlideTitle = styled.p`
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${theme.uncategorized.White};
  font-size: 19px;
  font-weight: 600;
`;

export const CustomCarousel = styled.div`
  margin-top: 20px;
  .carousel .control-dots .dot {
    background-color: rgba(255, 255, 255, 0.5);
    width: 6px;
    height: 6px;
    border-radius: 150px;
    margin: 0 4px;
  }

  .carousel .control-dots .dot.selected {
    background-color: ${theme.uncategorized.White};
    width: 6px;
    height: 6px;
  }
`;

export const Main_ProductList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${theme.grey[200]};
  overflow-y: auto;
  height: calc(100vh - 350px);
`;

export const Main_Top = styled.div`
  display: flex;
  padding-top: 20px;
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

export const Main_Latest = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 18px;
  font-weight: 700;
`;

export const Main_Erase = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 12px;
  font-weight: 400;
`;

export const Main_HistoryList = styled.div`
  display: flex;
  gap: 8px;
  overflow: auto;
  padding-top: 8px;
`;

export const Main_History = styled.div`
  display: flex;
  padding: 8px 10px 8px 14px;
  border-radius: 20px;
  align-items: center;
  gap: 6px;
  border: 1px solid ${theme.grey[200]};
`;

export const Main_ProductName = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 400;
`;
