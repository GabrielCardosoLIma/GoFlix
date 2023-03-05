import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #0d0d0d;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #ff0000;
  font-size: 30px;
  font-weight: bold;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 40px 0 20px 0;
`;

export const Menu = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ButtonMenu = styled.TouchableOpacity``;

export const MenuIcon = styled(Feather)`
  color: #fff;
  font-size: 30px;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const MoviesInTheaters = styled.View``;

export const TitleMoviesInTheaters = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0;
`;
