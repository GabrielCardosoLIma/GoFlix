import { Container } from "./style";
import { Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ProfileScreenParams = {
  title: string;
  vote_average: number;
  overview: string;
};

type ProfileScreenRouteProp = RouteProp<
  { ProfileScreen: ProfileScreenParams },
  "ProfileScreen"
>;

export function InfoMovies() {
  const route = useRoute<ProfileScreenRouteProp>();
  const { title, overview } = route.params;
  return (
    <Container>
      <Text style={{color: '#fff'}}>{title}</Text>
      <Text style={{color: '#fff'}}>{overview}</Text>
    </Container>
  );
}
