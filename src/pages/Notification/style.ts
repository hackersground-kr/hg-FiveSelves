import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  padding: 24px 20px 114px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
`;
export const NoticeLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.uncategorized.White};
  box-shadow: 0px 1px 6px 0px rgba(77, 77, 77, 0.25);
`;
export const PictureLayout = styled.div`
  width: 24%;
  height: 80px;
  border-radius: 0 0 8px 8px;
`;
export const Picture = styled.img`
  border-radius: 8px 0 0 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const MessageLayout = styled.div`
  width: 76%;
  padding-left: 16px;
  padding-right: 16px;
`;
export const Message = styled.p`
  color: ${theme.grey[600]};
  font-size: 15px;
  font-weight: 600;
`;
export const BlackColor = styled.span`
  color: ${theme.uncategorized.Black};
`;
