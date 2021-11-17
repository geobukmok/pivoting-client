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

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  // TODO: 환경변수로 빼려고 합니다.
  const host = `http://192.168.35.5:19000`;

  const logoURI = `${host}/src/assets/image/logo.png`;
  const laughGroupURI = `${host}/src/assets/image/laugh-group.png`;
  const upperArrowURI = `${host}/src/assets/image/upper-arrow.png`;
  const slideToPivotingURI = `${host}/src/assets/image/slide-to-pivoting.png`;
  const profileImageURI = `${host}/src/assets/image/profile-image.png`;
  const waitingPeople = 65;

  return (
    <Container>
      <IntroSection>
        <Logo source={{ uri: logoURI }} />
        <InduceParagraph>피보팅을{"\n"}시작해보세요</InduceParagraph>
        <WaitingParagraph>
          현재 <Bold>{waitingPeople}명</Bold>이 대기중이에요
        </WaitingParagraph>
        <ProfileImage source={{ uri: profileImageURI }} />
      </IntroSection>

      <LaughGroup source={{ uri: laughGroupURI }} resizeMode="contain" />

      <TouchableOpacity onPress={() => navigation.navigate("Matching")}>
        <SlideToPivoting
          source={{ uri: slideToPivotingURI }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <UpperArrow source={{ uri: upperArrowURI }} />
    </Container>
  );
};

export default Home;
