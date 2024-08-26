/*eslint-disable*/

import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const History_Layout = styled.div`
  padding: 24px 20px 0;
`;

export const History_Top = styled.div`
  display: flex;
  padding-top: 20px;
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

export const History_Latest = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 18px;
  font-weight: 700;
`;

export const History_Erase = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 12px;
  font-weight: 400;
`;

export const History_HistoryList = styled.div`
  display: flex;
  gap: 8px;
  overflow: auto;
  padding-top: 8px;
`;

export const History_History = styled.div`
  display: flex;
  padding: 8px 10px 8px 14px;
  border-radius: 20px;
  align-items: center;
  gap: 6px;
  border: 1px solid ${theme.grey[200]};
`;

export const History_ProductName = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 400;
`;
