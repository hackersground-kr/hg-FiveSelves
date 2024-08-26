import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const History_Container = styled.div`
  width: 100%;
  padding: 16px 20px 0;
`;

export const History_Section = styled.div`
  background-color: ${theme.grey[100]};
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 8px;
`;

export const History_Title = styled.div`
  color: ${theme.grey[600]};
  font-size: 15px;
  font-weight: 600;
`;

export const History_Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

export const History_Overall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  border-right: 1px solid ${theme.uncategorized.Black};
`;

export const History_OverallText = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 12px;
  font-weight: 400;
`;

export const History_OverallNumber = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ color }) => color || theme.uncategorized.Black};
`;

export const History_Detail = styled.div`
  display: flex;
  gap: 24px;
`;

export const History_DetailText = styled.p`
  font-size: 14px;
  color: ${theme.grey[500]};
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 16px;
  }

  span {
    margin-top: 4px;
    color: ${theme.grey[500]};
  }
`;
