import React from "react";
import { Button, View, Text, Image, StyleSheet, PixelRatio } from "react-native";
import Styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient"
import { Color } from "../constants/color";
import { FontSize, FontWeight } from "../constants/font";

const CLOSE_IMAGE_URL = "../assets/image/close.png";
const CHAT_RESULT_IMAGE_URL = "../assets/image/chat_result.png";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  p20: {
    padding: 20
  },
  pt10: {
    paddingTop: 10
  },
  pt30: {
    paddingTop: 30
  },
  px20: {
    paddingLeft: 20,
    paddingRight: 20
  },
  pr10: {
    paddingRight: 10
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  colorPVBlue: {
    color: Color.PVBlue
  },
  colorWhite: {
    color: Color.White
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 33.5
  }
})

const Title = Styled.Text`
  color: ${Color.PVBlack01};
  font-size: ${FontSize.Large};
  font-weight: ${FontWeight.Bold};
  line-height: 32px;
`;

const CloseImage = Styled.Image`
  resize-mode: contain;
  height: 24px;
  width: 24px;
`

const ListItem = Styled.View`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
`;

const ListIndex = Styled.Text`
  color: ${Color.PVBlack03};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  line-height: 26px;
`;

const ListText = Styled.Text`
  color: ${Color.PVBlack01};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  line-height: 26px;
`;

const SectionBar = Styled.View`
  margin-top: 30px;
  height: 9px;
  background-color: ${Color.PVBlack06};
`

const ButtonText = Styled.Text`
  color: ${Color.White};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
`;

const ChatResult = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.p20}>
        <CloseImage source={require(CLOSE_IMAGE_URL)}></CloseImage>
      </View>
      <View style={[styles.px20, styles.pt10]}>
        <Title>대화가 종료되었어요 :)</Title>
      </View>
      <View>
        <ListItem>
          <View style={styles.pr10}>
            <ListIndex>01</ListIndex>
          </View>
          <View>
            <ListText>이번 대화에서</ListText>
            <ListText>총 <Text style={styles.colorPVBlue}>23개</Text>의 반응을 받았어요!</ListText>
          </View>
        </ListItem>
        <ListItem>
          <View style={styles.pr10}>
            <ListIndex>01</ListIndex>
          </View>
          <View>
            <ListText>이번 대화에서</ListText>
            <ListText>총 <Text style={styles.colorPVBlue}>23개</Text>의 반응을 받았어요!</ListText>
          </View>
        </ListItem>
      </View>
      <SectionBar />
      <View style={[styles.px20, styles.pt30]}>
        <Title>이번 대화에 대한 피드백을 남기고</Title>
        <Title>서로의 피드백을 확인해보세요</Title>
      </View>
      <View style={styles.flexCenter}>
        <Image source={require(CHAT_RESULT_IMAGE_URL)}></Image>
      </View>
      <View style={styles.p20}>
        <LinearGradient 
          colors={[Color.PVBlue, Color.PVSkyblue]} 
          start={{x: 0, y:0}} 
          end={{x: 1, y: 1}}
          style={styles.button}
        >
          <ButtonText>피드백 남기기</ButtonText>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ChatResult;
