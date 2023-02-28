import {
  AlignStar,
  Assessment,
  BackgroundHeader,
  ButtonClose,
  Container,
  Header,
  IconClose,
  ImageArea,
  InfosMovie,
  StarIcon,
  TitleAndDescription,
  VoteAverage,
  Title,
  ButtonFavorite,
  IconStarButtonFavorite,
  TextButtonFavorite,
  Synopsis,
  TiltleSynopsis,
  OverviewSynopsis,
  ReleaseDateArea,
  TitleReleaseDate,
  ReleaseDate,
} from "./style";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, useWindowDimensions } from "react-native";

type ProfileScreenParams = {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  release_date: string;
};

type ProfileScreenRouteProp = RouteProp<
  { ProfileScreen: ProfileScreenParams },
  "ProfileScreen"
>;

export function InfoMovies() {
  const window = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();

  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    poster_path,
    release_date,
  } = route.params;

  // Define a data no formato "YYYY-MM-DD"
  const date = release_date;

  const dateObj = new Date(date);

  // Extrai os valores de dia, mês e ano da data
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Adiciona 1 ao índice do mês, pois ele começa em 0
  const year = dateObj.getFullYear();

  const dateFormated = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  return (
    <Container>
      <Header>
        <BackgroundHeader
          source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}
          style={{ width: window.width, height: "100%" }}
        />
        <ButtonClose activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <IconClose name="closecircle" />
        </ButtonClose>
      </Header>
      <InfosMovie>
        <ImageArea
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          style={{
            width: "40%",
            height: 260,
            borderRadius: 20,
            marginTop: -60,
          }}
        />
        <TitleAndDescription>
          <Title>{title}</Title>
          <Assessment>
            <AlignStar>
              <StarIcon name="star" />
            </AlignStar>
            <VoteAverage>{vote_average}/10</VoteAverage>
          </Assessment>
          <ReleaseDateArea>
            <TitleReleaseDate>Data de lançamento: </TitleReleaseDate>
            <ReleaseDate>{dateFormated}</ReleaseDate>
          </ReleaseDateArea>
          <ButtonFavorite>
            <IconStarButtonFavorite name="staro" />
            <TextButtonFavorite
            // onPress={}
            >
              Favoritar
            </TextButtonFavorite>
          </ButtonFavorite>
        </TitleAndDescription>
      </InfosMovie>
      <Synopsis>
        <TiltleSynopsis>Sinopse</TiltleSynopsis>
        <ScrollView showsVerticalScrollIndicator={false}>
          <OverviewSynopsis>{overview}</OverviewSynopsis>
        </ScrollView>
      </Synopsis>
    </Container>
  );
}
