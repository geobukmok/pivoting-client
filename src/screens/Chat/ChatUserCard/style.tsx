import styled from "styled-components/native";
interface ContainerProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
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

export const UserNameText = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const VoiceOnMark = styled.View`
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
