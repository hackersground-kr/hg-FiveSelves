/* eslint-disable */
import React from 'react';
import * as S from './style';
import Bookmark from 'assets/icon/Bookmark';

const GoodsDetail = () => {
  return (
    <S.Layout>
      <S.GoodsFooter>
        <S.FooterContent>
          <Bookmark />
          <S.Perchase>구매</S.Perchase>
        </S.FooterContent>
      </S.GoodsFooter>
    </S.Layout>
  );
};

export default GoodsDetail;
