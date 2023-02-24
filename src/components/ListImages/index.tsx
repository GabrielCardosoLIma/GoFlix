import { useNavigation } from "@react-navigation/native";
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
}

type PropsImagesMovies = {
  data: Props;
};

export function ListImages({ data }: PropsImagesMovies) {
  const navigation = useNavigation();

  return (
    <Container>
      <BackdropMovies
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
      />
      <Buttons>
        <ButtonInfo
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("InfoMovies", {
              title: data.title,
              overview: data.overview,
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
