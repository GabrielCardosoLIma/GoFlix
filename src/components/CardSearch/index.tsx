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
  id: string;
  title: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
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
          id: `${data.id}`,
          title: data.title,
          overview: data.overview,
          backdrop_path: data.backdrop_path,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          release_date: data.release_date,
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
        {/* <Description>{data.overview}</Description> */}
      </Assessment>
    </Container>
  );
}
