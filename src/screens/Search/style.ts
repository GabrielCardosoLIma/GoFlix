import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #0d0d0d;
  padding: 0 20px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
})`
  flex: 1;
  height: 40px;
  background-color: #4d4d4d;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 14px;
  color: #fff;
`;

export const SearchTextArea = styled.View`
  flex-wrap: wrap;
`;

export const ButtonSearch = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const SearchIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: #fff;
`;

export const SearchText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SearchMovieText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-style: italic;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const IconGoBack = styled(AntDesign)`
  font-size: 24px;
  color: #fff;
`;
