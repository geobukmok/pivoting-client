import styled from "styled-components/native";

import LaughGroupSVG from "../../assets/image/laugh-group.svg";
import LogoSVG from "../../assets/image/logo.svg";
import ProfileImageSVG from "../../assets/image/profile-image.svg";
import SlideToPivotingSVG from "../../assets/image/slide-to-pivoting.svg";
import UpperArrowSVG from "../../assets/image/upper-arrow.svg";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const IntroSection = styled.View`
  position: relative;
  height: 25%;
  margin: 12% 4% 0 4%;
`;

export const Logo = styled(LogoSVG)`
  margin-bottom: 12%;
`;

export const InduceParagraph = styled.Text`
  width: 156px;
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 5%;
`;

export const WaitingParagraph = styled.Text`
  font-size: 17px;
  line-height: 27px;
`;

export const ProfileImage = styled(ProfileImageSVG)`
  position: absolute;
  right: 0;
  bottom: 60px;
`;

export const Bold = styled.Text`
  font-weight: 700;
`;

export const LaughGroup = styled(LaughGroupSVG)`
  margin-top: 5%;
`;

export const UpperArrow = styled(UpperArrowSVG)`
  position: absolute;
  align-self: center;
  bottom: 5%;
`;

export const SlideToPivoting = styled(SlideToPivotingSVG)`
  margin: 0 auto;
  margin-top: 6%;
`;
