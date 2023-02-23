import { View, Text, Image } from "react-native";
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage } from "./style";

interface Props {
    title: string;
    poster_path: string;
    vote_average: number;
}

type PropsMovies = {
    data: Props
}

export function CardMovies({ data }: PropsMovies) {
    return (
        <Container>
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