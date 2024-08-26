/*eslint-disable*/
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Result_Layout = styled.div`
  padding: 24px 20px 60px;
`;

export const Result_ProductList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${theme.grey[200]};
  overflow-y: auto;
  height: calc(100vh - 180px);
`;
