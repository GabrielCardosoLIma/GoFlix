import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import {
  AddIcon,
  BackdropMovies,
  ButtonAdd,
  ButtonInfo,
  Buttons,
  Container,
  InfoIcon,
  TextButtonAdd,
  TextButtonInfo,
} from "./style";

interface Props {
  title: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
}

type PropsImagesMovies = {
  data: Props;
};

export function ListImages({ data }: PropsImagesMovies) {
  const navigation = useNavigation();
  const window = useWindowDimensions();

  return (
    <Container>
      <BackdropMovies
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
        style={{ width: window.width - 40 }}
      />
      <Buttons>
        <ButtonInfo
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("InfoMovies", {
              title: data.title,
              overview: data.overview,
              backdrop_path: data.backdrop_path,
              poster_path: data.poster_path,
              vote_average: data.vote_average,
              release_date: data.release_date
            })
          }
        >
          <InfoIcon name="infocirlceo" />
          <TextButtonInfo>Info.</TextButtonInfo>
        </ButtonInfo>
        <ButtonAdd activeOpacity={0.7}>
          <AddIcon name="plus" />
          <TextButtonAdd>Minha Lista</TextButtonAdd>
        </ButtonAdd>
      </Buttons>
    </Container>
  );
}
