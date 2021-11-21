import styled from "styled-components/native";

import SavedSVG from "../../assets/image/saved.svg";

export const Container = styled.View`
  width: 100%;
  height: 145px;
  background-color: #f5f4f9;
  border-radius: 10px;

  margin-bottom: 4%;
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 3.5%;
`;

export const Icon = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50;
`;

export const Icons = styled.View`
  flex-direction: row;
`;

export const AdditionalInfos = styled.Text`
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #8f91a0;
`;

export const Saved = styled(SavedSVG)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Unread = styled.View`
  position: absolute;
  top: 6px;
  left: 6px;
  width: 10px;
  height: 10px;
  background-color: #ef5d5d;
  border-radius: 50;
`;
