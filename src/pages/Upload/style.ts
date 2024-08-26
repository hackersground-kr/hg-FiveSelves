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
export const ImgLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.green[50]};
  border-radius: 8px;
  margin-top: 20px;
  aspect-ratio: 1/1;
  overflow: hidden;
`;
export const UploadText = styled.p`
  color: ${theme.green[300]};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
export const InputsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;
export const NameLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export const Category = styled.p`
  color: ${theme.grey[800]};
  font-size: 12px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${theme.grey[300]};
  padding-left: 12px;
  font-size: 15px;
  font-weight: 400;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
export const Submit = styled.button`
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${theme.green[400]};
  border: none;
  padding: 14px 0;
  color: ${theme.uncategorized.White};
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;

  &:active {
    background-color: ${theme.green[500]};
  }
`;
