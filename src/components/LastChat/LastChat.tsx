import React from "react";

import SavedSVG from "../../assets/image/saved.svg";
import {
  AdditionalInfos,
  Container,
  Icon,
  Icons,
  Saved,
  Title,
  Unread,
} from "./style";

type Props = {
  content: string;
  memberURL: string[];
  date: string;
  elapsedTime: string;
};

const LastChat = ({ content, memberURL, date, elapsedTime }: Props) => {
  return (
    <Container>
      <Title>{content}</Title>
      <Icons>
        {memberURL.map((uri) => (
          <Icon key={uri} source={{ uri }} />
        ))}
      </Icons>
      <AdditionalInfos>
        {date} / {elapsedTime}
      </AdditionalInfos>
      <Unread />
      {/* <SavedSVG /> */}
    </Container>
  );
};

// FIXME: 추후 서버와 연동시 defaultProps 제거할 것
LastChat.defaultProps = {
  content: "대화 스타일이\n점점 좋아지고 있어요!",
  memberURL: [
    "https://avatars.githubusercontent.com/u/19240202?v=4",
    "https://avatars.githubusercontent.com/u/20085849?s=88&u=282927c7a3ada57664ace463e42c9ddd6cfbdd0c&v=4",
    "https://avatars.githubusercontent.com/u/40158029?s=52&v=4",
  ],
  date: "2021.01.10",
  elapsedTime: "30:00",
};

export default LastChat;
