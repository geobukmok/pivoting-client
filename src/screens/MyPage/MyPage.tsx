import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import LastChat from "../../components/LastChat";
import { Logo } from "../Home/style";
import {
  ChatSection,
  MyPageLayout,
  Stat,
  StatisticsSection,
  SubTitle,
} from "./style";

const MyPage = () => {
  return (
    <MyPageLayout>
      <Logo />
      <StatisticsSection>
        <SubTitle>전체 통계</SubTitle>
        <Stat />
      </StatisticsSection>
      <ChatSection>
        <SubTitle>지난 대화 목록</SubTitle>
        <LastChat />
        <LastChat />
        <LastChat />
      </ChatSection>
    </MyPageLayout>
  );
};

export default MyPage;
