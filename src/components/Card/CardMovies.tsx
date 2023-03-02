import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage } from "./style";

interface Props {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    backdrop_path: string;
    release_date: string;
}

type PropsMovies = {
    data: Props
}

export function CardMovies({ data }: PropsMovies) {
    const navigation = useNavigation();
    const window = useWindowDimensions();

    return (
        <Container
            activeOpacity={0.7}
            style={{ height: window.height <= 780 ? 250 : 270 }}
            onPress={() => navigation.navigate("InfoMovies", {
                id: `${data.id}`,
                title: data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                vote_average: data.vote_average,
                release_date: data.release_date
            })}>
            <ImageMovie
                source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
            />
            <Assessment>
                <AlignStar>
                    <StarIcon
                        name="star"
                    />
                </AlignStar>
                <VoteAverage>
                    {data.vote_average}/10
                </VoteAverage>
            </Assessment>
            <TtileMovie>{data.title}</TtileMovie>
        </Container>
    )
}