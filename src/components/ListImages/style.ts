import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  margin-right: 20px;
`;

export const BackdropMovies = styled.Image`
  width: 370px;
  height: 250px;
  border-radius: 20px;
`;

export const Buttons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  margin-top: -80px;
`;

export const InfoIcon = styled(AntDesign)`
  color: #000;
  font-size: 18px;
  margin-right: 5px;
`;

export const ButtonInfo = styled.TouchableOpacity`
  width: 155px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
`;

export const TextButtonInfo = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 155px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #2d2d2d;
  opacity: 0.8;
  border-radius: 5px;
`;

export const TextButtonAdd = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const AddIcon = styled(AntDesign)`
  color: #fff;
  font-size: 18px;
  margin-right: 5px;
`;