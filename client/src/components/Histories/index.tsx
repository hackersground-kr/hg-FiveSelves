/*eslint-disable*/
import React from 'react';
import * as _ from './style';
import { theme } from 'lib/utils/style/theme';

interface PurchaseHistoryProps {
  overall: number;
  ongoing: number;
  inProgress: number;
  completed: number;
}

interface SalesHistoryProps {
  overall: number;
  ongoing: number;
  inProgress: number;
  completed: number;
}

const PurchaseHistory = ({
  overall,
  ongoing,
  inProgress,
  completed
}: PurchaseHistoryProps) => {
  return (
    <_.History_Container>
      <_.History_Title>구매 내역</_.History_Title>
      <_.History_Section>
        <_.History_Content>
          <_.History_Overall>
            <_.History_OverallText>전체</_.History_OverallText>
            <_.History_OverallNumber color={theme.uncategorized.UpRed}>
              {overall}
            </_.History_OverallNumber>
          </_.History_Overall>
          <_.History_Detail>
            <_.History_DetailText>
              판매 중<span>{ongoing > 0 ? ongoing : '-'}</span>
            </_.History_DetailText>
            <_.History_DetailText>
              진행 중<span>{inProgress > 0 ? inProgress : '-'}</span>
            </_.History_DetailText>
            <_.History_DetailText>
              종료
              <span>{completed > 0 ? completed : '-'}</span>
            </_.History_DetailText>
          </_.History_Detail>
        </_.History_Content>
      </_.History_Section>
    </_.History_Container>
  );
};

const SalesHistory = ({
  overall,
  ongoing,
  inProgress,
  completed
}: SalesHistoryProps) => {
  return (
    <_.History_Container>
      <_.History_Title>판매 내역</_.History_Title>
      <_.History_Section>
        <_.History_Content>
          <_.History_Overall>
            <_.History_OverallText>전체</_.History_OverallText>
            <_.History_OverallNumber color={theme.green[600]}>
              {overall}
            </_.History_OverallNumber>
          </_.History_Overall>
          <_.History_Detail>
            <_.History_DetailText>
              구매 중<span>{ongoing > 0 ? ongoing : '-'}</span>
            </_.History_DetailText>
            <_.History_DetailText>
              진행 중<span>{inProgress > 0 ? inProgress : '-'}</span>
            </_.History_DetailText>
            <_.History_DetailText>
              종료
              <span>{completed > 0 ? completed : '-'}</span>
            </_.History_DetailText>
          </_.History_Detail>
        </_.History_Content>
      </_.History_Section>
    </_.History_Container>
  );
};

export { PurchaseHistory, SalesHistory };
