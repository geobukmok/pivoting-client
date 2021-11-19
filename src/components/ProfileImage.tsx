import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

type ProfileImageSize = "sm" | "md" | "lg";

const SizeMap: { [k in ProfileImageSize]: number } = {
  sm: 50,
  md: 100,
  lg: 150,
};

type ContainerProps = {
  size: ProfileImageSize;
};

const Container = styled.View<ContainerProps>`
  width: ${(props) => SizeMap[props.size] + "px"};
  height: ${(props) => SizeMap[props.size] + "px"};
  border-radius: ${(props) => SizeMap[props.size] / 2 + "px"};
  overflow: hidden;
`;

const Image = styled.Image<ContainerProps>`
  width: ${(props) => SizeMap[props.size] + "px"};
  height: ${(props) => SizeMap[props.size] + "px"};
`;

interface Props {
  size: ProfileImageSize;
  image: ImageSourcePropType;
}

const ProfileImage: React.FC<Props> = ({ size = "sm", image }) => {
  return (
    <Container size={size}>
      <Image size={size} source={image} />
    </Container>
  );
};

export default ProfileImage;
