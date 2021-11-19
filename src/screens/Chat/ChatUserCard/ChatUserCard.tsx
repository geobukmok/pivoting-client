import { Container, UserNameText, VoiceOnMark } from "./style";
import React, { useState } from "react";
import { muteIcon, smileProfileImage, unmuteIcon } from "../../../utils/images";

import EmotionBox from "./EmotionBox";
import { Image } from "react-native";
import ProfileImage from "../../../components/ProfileImage";

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
