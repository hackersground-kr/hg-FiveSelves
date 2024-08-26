/*eslint-disable*/
import styled from 'styled-components';

export const SearchBar_Layout = styled.div`
  display: flex;
  gap: 8px;
`;

export const SearchBar_Container = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  justify-content: space-between;
  background-color: #f9f9f9;
  align-items: center;
  border-radius: 10px;
`;

export const SearchBar_Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  color: var(--gray-black, #1a1e27);
  font-size: 15px;
  font-weight: 400;
  background-color: transparent;
`;
