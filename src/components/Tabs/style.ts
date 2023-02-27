import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: transparent;
  position: absolute;
  padding: 5px;
  width: 100%;
  height: 50px;
  flex-direction: column;
`;

export const ButtonHome = styled.TouchableOpacity`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 10px;
`;

export const IconHome = styled(Entypo)`
  font-size: 20px;
`;

export const IconFavorite = styled(MaterialIcons)`
  font-size: 20px;
`;

export const TabsAndroid = styled.View``;
