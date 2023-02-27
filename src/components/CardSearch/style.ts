import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  margin-top: 14px;
  margin-bottom: 14px;
  flex-direction: row;
`;

export const ImageMovie = styled.Image`
  width: 140px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TtileMovie = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Assessment = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

export const StarRating = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const VoteAverage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
`;

export const StarIcon = styled(AntDesign)`
  align-items: center;
  font-size: 12px;
  color: #eead2d;
`;

export const AlignStar = styled.View`
  margin-right: 5px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-top: 10px;
`;
