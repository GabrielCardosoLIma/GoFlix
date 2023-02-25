import { useNavigation } from "@react-navigation/native";
import {
  AlignStar,
  Assessment,
  Container,
  Description,
  ImageMovie,
  StarIcon,
  StarRating,
  TtileMovie,
  VoteAverage,
} from "./style";

interface Props {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

type PropsMovies = {
  data: Props;
};

export function CardSearch({ data }: PropsMovies) {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() =>
        navigation.navigate("InfoMovies", {
          title: data.title,
          overview: data.overview,
        })
      }
    >
      <ImageMovie
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
      />
      <Assessment>
        <TtileMovie>{data.title}</TtileMovie>
        <StarRating>
          <AlignStar>
            <StarIcon name="star" />
          </AlignStar>
          <VoteAverage>{data.vote_average}/10</VoteAverage>
        </StarRating>
        <Description>
            {data.overview}
        </Description>
      </Assessment>
    </Container>
  );
}
