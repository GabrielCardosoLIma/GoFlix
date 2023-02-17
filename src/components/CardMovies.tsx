import { View, Text } from "react-native";

interface Props {
    title: string;
    release_date: string;
}

type PropsFilmes = {
    data: Props
}

export function CardMovies({ data }: PropsFilmes) {
    return (
        <View>
            <Text style={{ textAlign: "center", color: "black" }}>{data.title}</Text>
        </View>
    )
}