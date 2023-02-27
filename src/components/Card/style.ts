import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 120px;
  flex-direction: column;
  margin-right: 20px;
`;

export const ImageMovie = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 5px;
`;

export const TtileMovie = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const Assessment = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const VoteAverage = styled.Text`
  font-size: 12px;
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
