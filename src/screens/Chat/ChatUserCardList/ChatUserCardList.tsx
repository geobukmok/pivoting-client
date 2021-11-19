import ChatUserCard from "../ChatUserCard";
import { Container } from "./style";
import React from "react";

const UserCardList = () => {
  return (
    <Container>
      <ChatUserCard />
      <ChatUserCard voiceOn={true} />
      <ChatUserCard />
      <ChatUserCard />
    </Container>
  );
};

export default UserCardList;
