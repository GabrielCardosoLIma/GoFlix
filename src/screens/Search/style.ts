import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

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

export const ButtonSearch = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const SearchIcon = styled(Feather)`
  font-size: 24px;
  color: #fff;
`;

export const SearchText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;
