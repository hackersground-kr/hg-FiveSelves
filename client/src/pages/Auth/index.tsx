/*eslint-disable*/

import React from 'react';
import * as _ from './style';
import Title from 'assets/icon/Title';
import Coin from 'assets/icon/Coin';
import Apple from 'assets/icon/Apple';
import Watermelon from 'assets/icon/Watermelon';
import Fish from 'assets/icon/Fish';
import Google from 'assets/icon/Google';

const Auth = () => {
  return (
    <_.Auth_Layout>
      <_.Auth_Icons>
        <_.Auth_Coin>
          <Coin />
        </_.Auth_Coin>
        <_.Auth_Apple>
          <Apple />
        </_.Auth_Apple>
        <_.Auth_Watermelon>
          <Watermelon />
        </_.Auth_Watermelon>
        <_.Auth_Fish>
          <Fish />
        </_.Auth_Fish>
      </_.Auth_Icons>
      <_.Auth_Title>
        <Title />
        <_.Auth_Title_Explain>못난이 농수산물 거래 서비스</_.Auth_Title_Explain>
      </_.Auth_Title>
      <_.Auth_Google_Button>
        <Google />
        <_.Auth_Google_Title>구글 로그인</_.Auth_Google_Title>
      </_.Auth_Google_Button>
    </_.Auth_Layout>
  );
};

export default Auth;
