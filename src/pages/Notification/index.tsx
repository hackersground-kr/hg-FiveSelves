/* eslint-disable */
import React, { useState } from 'react';
import * as S from './style';
import MenuBar from 'components/MenuBar';
import Tomato from 'assets/image/Tomato.png';
import Carrot from 'assets/image/carrot.png';
import Onion from 'assets/image/onion.png';
import Watermelon from 'assets/image/watermelon.png'
import Garlic from 'assets/image/garlic.png'

const Notification = () => {
  const [selectState, setSelectState] = useState(3);
  const notice = [
    { name: '할아버지가 농사지은 토마토', count: 42, mode: 'sell', img: Tomato },
    { name: '1% 부족한 당근', count: 10, mode: 'buy', img: Carrot },
    { name: '맛있는 양파 보랏빛 양파', count: 22, mode: 'buy', img: Onion},
    { name: '줄무니 없는 수박', count: 67, mode: 'sell', img: Watermelon },
    { name: '의성 마늘', count: 23, mode: 'sell', img: Garlic },
    { name: '할아버지가 농사지은 토마토', count: 42, mode: 'sell', img: Tomato },
    { name: '1% 부족한 당근', count: 10, mode: 'buy', img: Carrot },
    { name: '맛있는 양파 보랏빛 양파', count: 22, mode: 'buy', img: Onion},
    { name: '줄무니 없는 수박', count: 67, mode: 'sell', img: Watermelon },
    { name: '의성 마늘', count: 23, mode: 'sell', img: Garlic },
    { name: '할아버지가 농사지은 토마토', count: 42, mode: 'sell', img: Tomato },
    { name: '1% 부족한 당근', count: 10, mode: 'buy', img: Carrot },
    { name: '맛있는 양파 보랏빛 양파', count: 22, mode: 'buy', img: Onion},
    { name: '줄무니 없는 수박', count: 67, mode: 'sell', img: Watermelon },
    { name: '의성 마늘', count: 23, mode: 'sell', img: Garlic },
    { name: '할아버지가 농사지은 토마토', count: 42, mode: 'sell', img: Tomato },
    { name: '1% 부족한 당근', count: 10, mode: 'buy', img: Carrot },
    { name: '맛있는 양파 보랏빛 양파', count: 22, mode: 'buy', img: Onion},
    { name: '줄무니 없는 수박', count: 67, mode: 'sell', img: Watermelon },
    { name: '의성 마늘', count: 23, mode: 'sell', img: Garlic },
  ];
  return (
    <S.Layout>
      <S.Title>알림</S.Title>
      <S.Notifications>
        {notice.map((item) => {
          if (item.mode === 'sell') {
            return (
              <S.NoticeLayout>
                <S.PictureLayout>
                  <S.Picture src={item.img} />
                </S.PictureLayout>
                <S.MessageLayout>
                  <S.Message>
                    <S.BlackColor>{`${item.name} ${item.count}개`}</S.BlackColor>가 판매되었습니다.
                  </S.Message>
                </S.MessageLayout>
              </S.NoticeLayout>
            );
          }
          return (
            <S.NoticeLayout>
              <S.PictureLayout>
                <S.Picture src={item.img} />
              </S.PictureLayout>
              <S.MessageLayout>
                  <S.Message>
                    <S.BlackColor>{`${item.name} ${item.count}개`}</S.BlackColor>가 성공적으로 등록되었습니다.
                  </S.Message>
                </S.MessageLayout>
            </S.NoticeLayout>
          );
        })}
      </S.Notifications>
      <MenuBar selectState={selectState} setSelectState={setSelectState} />
    </S.Layout>
  );
};

export default Notification;
