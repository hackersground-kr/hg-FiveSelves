import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const MenuBar_Container = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
  bottom: 0px;
  right: 0;
  padding: 0 40px;
  background-color: ${theme.uncategorized.White};
`;

export const Menubar_Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menubar_Title = styled.div<{ select?: boolean }>`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.select ? theme.green[400] : theme.grey[500])};
`;
