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
