/*eslint-disable*/

import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Product_Layout = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid ${theme.grey[200]};
  &:last-child {
    border-bottom: none;
  }
`;

export const Product_Image = styled.img`
  width: 57px;
  height: 57px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Product_Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Product_Title = styled.div`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 700;
`;

export const Product_Grade = styled.div`
  color: ${theme.grey[500]};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

export const Product_Price = styled.div`
  color: ${theme.uncategorized.UpRed};
  font-size: 15px;
  font-weight: 700;
`;
