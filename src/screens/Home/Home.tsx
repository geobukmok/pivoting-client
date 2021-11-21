import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import {
  Bold,
  Container,
  InduceParagraph,
  IntroSection,
  LaughGroup,
  Logo,
  ProfileImage,
  SlideToPivoting,
  UpperArrow,
  WaitingParagraph,
} from "./style";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const waitingPeople = 65;

  return (
    <Container>
      <IntroSection>
        <Logo />
        <InduceParagraph>피보팅을{"\n"}시작해보세요</InduceParagraph>
        <WaitingParagraph>
          현재 <Bold>{waitingPeople}명</Bold>이 대기중이에요
        </WaitingParagraph>
        <ProfileImage />
      </IntroSection>

      <LaughGroup />

      <TouchableOpacity onPress={() => navigation.navigate("MyPage")}>
        <SlideToPivoting />
      </TouchableOpacity>

      <UpperArrow />
    </Container>
  );
};

export default Home;
