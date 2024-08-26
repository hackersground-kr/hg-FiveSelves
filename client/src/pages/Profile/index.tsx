import React from 'react';
import * as _ from './style';
import Apple from 'assets/image/Apple.png';
import Temperature from 'assets/icon/Temperature';
import Point from 'assets/icon/Point';
import Coupon from 'assets/icon/Coupon';
import { PurchaseHistory, SalesHistory } from 'components/Histories';
import MenuBar from 'components/MenuBar';

const Profile = () => {
  const data = [
    '공지사항',
    '검수 기준',
    '패널티 정책',
    '이용 정책',
    '스토어 안내',
    '판매자 방문접수'
  ];
  return (
    <_.Profile_Layout>
      <_.Profile_Header>
        <_.Profile_Top>
          <_.Profile_Image src={Apple} />
          <_.Profile_Infos>
            <_.Profile_Info>
              <_.Profile_Count>23</_.Profile_Count>
              <_.Profile_Title>판매량</_.Profile_Title>
            </_.Profile_Info>
            <_.Profile_Info>
              <_.Profile_Count>40</_.Profile_Count>
              <_.Profile_Title>구매량</_.Profile_Title>
            </_.Profile_Info>
            <_.Profile_Info>
              <_.Profile_Count>4</_.Profile_Count>
              <_.Profile_Title>팔로잉</_.Profile_Title>
            </_.Profile_Info>
          </_.Profile_Infos>
        </_.Profile_Top>
        <_.Profile_UserName>최성훈</_.Profile_UserName>
        <_.Profile_Buttons>
          <_.Profile_Button>프로필 수정</_.Profile_Button>
          <_.Profile_Button>프로필 공유</_.Profile_Button>
        </_.Profile_Buttons>
      </_.Profile_Header>
      <_.Profile_OptionList>
        <_.Profile_Option>
          <Temperature />
          <_.Profile_Option_Text>매너온도</_.Profile_Option_Text>
        </_.Profile_Option>
        <_.Profile_Option>
          <Point />
          <_.Profile_Option_Text>포인트</_.Profile_Option_Text>
        </_.Profile_Option>
        <_.Profile_Option>
          <Coupon />
          <_.Profile_Option_Text>쿠폰</_.Profile_Option_Text>
        </_.Profile_Option>
      </_.Profile_OptionList>
      <PurchaseHistory overall={0} ongoing={0} inProgress={0} completed={0} />
      <SalesHistory overall={0} ongoing={0} inProgress={0} completed={0} />
      <_.Profile_NoticeList>
        {data.map((notice, index) => (
          <_.Profile_Notice key={index}>{notice}</_.Profile_Notice>
        ))}
      </_.Profile_NoticeList>
      <MenuBar />
    </_.Profile_Layout>
  );
};

export default Profile;
