import { BlurView } from "expo-blur";
import { Image, View } from "react-native";
import { AddIcon, BackdropMovies, ButtonAdd, ButtonInfo, Buttons, Container, InfoIcon, TextButtonAdd, TextButtonInfo } from "./style";

interface Props {
    backdrop_path: string;
}

type PropsImagesMovies = {
    data: Props
}

export function ListImages({ data }: PropsImagesMovies) {
    return (
        <Container>
            <BackdropMovies
                source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
            />
            <Buttons>
                <ButtonInfo
                    activeOpacity={0.7}
                >
                    <InfoIcon
                        name="infocirlceo"
                    />
                    <TextButtonInfo>
                        Info.
                    </TextButtonInfo>
                </ButtonInfo>
                <ButtonAdd
                    activeOpacity={0.7}
                >
                    <AddIcon
                        name="plus"
                    />
                    <TextButtonAdd>
                        Minha Lista
                    </TextButtonAdd>
                </ButtonAdd>
            </Buttons>
        </Container>
    )
}