import React, { useRef, useState } from "react";
import { Animated, Image, PanResponder, View } from "react-native";
import styled from "styled-components/native";
import ProfileImage from "../../../components/ProfileImage";
import { muteIcon, smileProfileImage, unmuteIcon } from "../../../utils/images";
import EmotionBox from "./EmotionBox";

interface ContainerProps {
  selected: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  width: 45%;
  margin: 2.5%;
  height: 45%;
  border-radius: 20px;
  border-width: 5px;
  background-color: #f6f6f6;
  border-color: ${({ selected }) => (selected ? "#5073cd" : "#f6f6f6")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserNameText = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const VoiceOnMark = styled.View`
  right: 5px;
  top: 5px;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: white;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

interface Props {
  voiceOn?: boolean;
}

const ChatUserCard: React.FC<Props> = ({ voiceOn = false }) => {
  const [isShownEmotionBox, setIsShownEmotionBox] = useState<boolean>(false);
  const handleClick = () => {
    setIsShownEmotionBox((prev) => !prev);
  };
  const closeEmotionBox = () => {
    setIsShownEmotionBox(false);
  };
  return (
    <Container selected={voiceOn} onPress={() => handleClick()}>
      <ProfileImage size="md" image={smileProfileImage} />
      <UserNameText>안녕하세요.</UserNameText>
      <VoiceOnMark>
        <Image source={voiceOn ? unmuteIcon : muteIcon} />
      </VoiceOnMark>
      {isShownEmotionBox && <EmotionBox onClose={() => closeEmotionBox()} />}
    </Container>
  );
};

export default ChatUserCard;
