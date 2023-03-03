import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #0d0d0d;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 40px 20px;
`;

export const TitleFavorites = styled.Text`
  color: #fff;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const IconGoBack = styled(AntDesign)`
  font-size: 24px;
  color: #fff;
`;
