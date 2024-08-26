/*eslint-disable*/

import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Product_Layout = styled.div<{ isFirst: boolean; isLast: boolean }>`
  padding: 12px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? '10px 10px 0 0' : isLast ? '0 0 10px 10px' : '0'};
  border-top: ${({ isFirst }) => (isFirst ? '1px solid #e5e5e5' : 'none')};
  border-bottom: ${({ isLast }) => (isLast ? '1px solid #e5e5e5' : 'none')};
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  &:not(:first-child):not(:last-child) {
    border-top: 1px solid #e5e5e5;
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
