import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import ProfileImage from "../../../components/ProfileImage";
import { muteIcon, smileProfileImage, unmuteIcon } from "../../../utils/Image";

interface ContainerProps {
  selected: boolean;
}

const Container = styled.View<ContainerProps>`
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
  showActiveVoice?: boolean;
  voiceOn?: boolean;
}

const ChatUserCard: React.FC<Props> = ({
  voiceOn = false,
  showActiveVoice = false,
}) => {
  return (
    <Container selected={voiceOn}>
      <ProfileImage size="md" image={smileProfileImage} />
      <UserNameText>안녕하세요.</UserNameText>
      {showActiveVoice && (
        <VoiceOnMark>
          <Image source={voiceOn ? unmuteIcon : muteIcon} />
        </VoiceOnMark>
      )}
    </Container>
  );
};

export default ChatUserCard;
