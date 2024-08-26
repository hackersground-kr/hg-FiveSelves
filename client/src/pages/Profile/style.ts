/*eslint-disable*/
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Profile_Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

export const Profile_Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 15px;
`;

export const Profile_Top = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;

export const Profile_Image = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 100%;
  object-fit: cover;
`;

export const Profile_Infos = styled.div`
  display: flex;
  gap: 40px;
`;

export const Profile_Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Profile_Count = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 600;
`;

export const Profile_Title = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 400;
`;

export const Profile_UserName = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 15px;
  font-weight: 600;
  padding-top: 8px;
  align-self: self-start;
`;

export const Profile_Buttons = styled.div`
  padding-top: 16px;
  display: flex;
  gap: 12px;
`;

export const Profile_Button = styled.button`
  color: ${theme.uncategorized.Black};
  font-size: 14px;
  font-weight: 600;
  padding: 5px 49px;
  gap: 8px;
  border-radius: 4px;
  background: ${theme.grey[100]};
`;

export const Profile_OptionList = styled.div`
  border-top: 2px solid ${theme.grey[200]};
  border-bottom: 2px solid ${theme.grey[200]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile_Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 37px;
`;

export const Profile_Option_Text = styled.p`
  color: ${theme.uncategorized.Black};
  font-size: 12px;
  font-weight: 400;
`;

export const Profile_NoticeList = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Profile_Notice = styled.div`
  width: 33.333%;
  padding: 20px 0;
  text-align: center;
  color: ${theme.grey[600]};
  font-size: 14px;
  font-weight: 500;
  border-top: 1px solid ${theme.grey[200]};
  border-bottom: 1px solid ${theme.grey[200]};
  border-left: 0.5px solid ${theme.grey[200]};
  border-right: 0.5px solid ${theme.grey[200]};
  box-sizing: border-box; /* 테두리 크기 포함 계산 */

  &:nth-child(3n + 1) {
    border-left: 0;
  }

  &:nth-child(3n) {
    border-right: 0;
  }

  &:nth-child(-n + 3) {
    border-top: 1px solid ${theme.grey[200]};
  }

  &:nth-child(n + 4) {
    border-top: 0.5px solid ${theme.grey[200]};
  }

  &:nth-last-child(-n + 3) {
    border-bottom: 1px solid ${theme.grey[200]};
  }
`;
