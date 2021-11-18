import React, { VoidFunctionComponent } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  overflow: hidden;
  transform: translate(-75px, -75px);
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
`;

const EmotionButton = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
`;
const LeftTopButton = styled(EmotionButton)`
  background-color: #f2f3fa;
`;

const RightTopButton = styled(EmotionButton)`
  background-color: white;
`;

const LeftBottomButton = styled(EmotionButton)`
  background-color: white;
`;

const RightBottomButton = styled(EmotionButton)`
  background-color: #f2f3fa;
`;

const EmotionText = styled.Text`
  font-size: 30px;
`;

const CircleHole = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  transform: translate(-25px, -25px);
  background-color: #f6f6f6;
`;

interface Props {
  onClose(): void;
}

const EmotionBox: React.FC<Props> = ({ onClose }) => {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}
    >
      <LeftTopButton
        onPress={() => {
          onClose();
        }}
      >
        <EmotionText>👀</EmotionText>
      </LeftTopButton>
      <RightTopButton
        onPress={() => {
          onClose();
        }}
      >
        <EmotionText>👍</EmotionText>
      </RightTopButton>
      <LeftBottomButton
        onPress={() => {
          onClose();
        }}
      >
        <EmotionText>🔥</EmotionText>
      </LeftBottomButton>
      <RightBottomButton
        onPress={() => {
          onClose();
        }}
      >
        <EmotionText>💩</EmotionText>
      </RightBottomButton>
      <CircleHole />
    </Container>
  );
};
export default EmotionBox;
