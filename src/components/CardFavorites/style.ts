import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 20px;
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
  justify-content: center;
  margin-left: 20px;
`;

export const StarRating = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const VoteAverage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
`;

export const StarIcon = styled(AntDesign)`
  align-items: center;
  font-size: ${RFValue(16)}px;
  color: #eead2d;
`;

export const AlignStar = styled.View`
  margin-right: 5px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  width: 145px;
  height: 30px;
  background-color: #fff;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-top: 20px;
`;

export const IconStarButtonFavorite = styled(AntDesign)`
  color: #000;
  font-size: 20px;
`;

export const TextButtonFavorite = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-left: 16px;
`;