import { View } from "react-native";
import styled from "styled-components/native";

import LogoSVG from "../../assets/image/logo.svg";
import StatSVG from "../../assets/image/stat.svg";

export const MyPageLayout = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 12% 4% 0 4%;
`;

export const Logo = styled(LogoSVG)`
  margin-bottom: 12%;
`;

export const StatisticsSection = styled.View`
  position: relative;
  height: 25%;
  margin-top: 5%;
  /* background-color: indianred; */
`;

export const SubTitle = styled.Text`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;

export const Stat = styled(StatSVG)``;

export const ChatSection = styled.View`
  margin-top: 5%;
`;
