import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import api from "../../services/api";
import { ButtonSearch, InputArea, InputSearch, SearchIcon } from "./style";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";
const COUNTRY = "BR";

export function Input() {
    const [buscar, setBuscar] = useState("");
    const [movies, setMovies] = useState([]);

    async function handleGetMovies() {
        if (buscar === "") {
            Alert.alert("Erro ao buscar", "Por favor insira o nome do filme desejado.")
        } else {
            const res = await api.get(
                `search/movie${API_KEY}&language=${LANGUAGE}&region=${COUNTRY}&query=${buscar}`
            )
            const data = await res.data
            setMovies(data.results)
            setBuscar(buscar);
        }
    }
    return (
        <InputArea>
            <InputSearch
                placeholder="Procurar Algo?"
                onChangeText={setBuscar}
                value={buscar}
            />
            <ButtonSearch title="Buscar" onPress={handleGetMovies} activeOpacity={0.7}>
                <SearchIcon
                    name="search"
                />
            </ButtonSearch>
            {/* <FlatList
                    data={movies}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardMovies data={item} />}
                /> */}
        </InputArea>
    )
}