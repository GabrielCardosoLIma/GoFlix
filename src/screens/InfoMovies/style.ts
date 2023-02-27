import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #0d0d0d;
`;

export const Header = styled.View`
  height: 35%;
`;

export const BackgroundHeader = styled.Image``;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  padding-top: 40px;
  padding-left: 20px;
`;

export const IconClose = styled(AntDesign)`
  font-size: 26px;
  color: #fff;
`;

export const InfosMovie = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
`;

export const ImageArea = styled.Image``;

export const TitleAndDescription = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Assessment = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
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

export const ButtonFavorite = styled.TouchableOpacity`
  width: 145px;
  height: 30px;
  background-color: #fff;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
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

export const Synopsis = styled.View`
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;
`;

export const TiltleSynopsis = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const OverviewSynopsis = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
`;

export const ReleaseDateArea = styled.View`
flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleReleaseDate = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  font-weight: bold;
`;

export const ReleaseDate = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  margin-left: 5px;
`;
