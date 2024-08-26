/*eslint-disable*/

import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Auth_Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #2edca8 0%, #47d377 100%);
`;

export const Auth_Icons = styled.div`
  width: 100%;
  position: relative;
  margin-top: 140px;
`;

export const Auth_Coin = styled.div`
  position: absolute;
  left: 30%;
  top: -50px;
`;

export const Auth_Apple = styled.div`
  position: absolute;
  left: 7%;
  top: 10px;
`;

export const Auth_Watermelon = styled.div`
  position: absolute;
  right: 27%;
  bottom: -110px;
  transform: translateX(-50%);
`;

export const Auth_Fish = styled.div`
  position: absolute;
  right: 10%;
  top: 10px;
`;

export const Auth_Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 220px;
`;

export const Auth_Title_Explain = styled.p`
  color: ${theme.uncategorized.White};
  font-size: 16px;
  font-weight: 700;
`;

export const Auth_Google_Button = styled.div`
  padding: 11px 105px 11px 12px;
  display: flex;
  align-items: center;
  gap: 68px;
  border-radius: 4px;
  border: 1px solid ${theme.grey[200]};
  background: ${theme.uncategorized.White};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 80px;
`;

export const Auth_Google_Title = styled.p`
  color: ${theme.uncategorized.Black};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
