/* eslint-disable */
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  padding: 48px 20px 20px 20px;
  width: 100%;
`;
export const GoodsFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 34px;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.25);
  z-index: 9999;
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
`;
