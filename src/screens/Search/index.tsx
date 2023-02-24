import React, { useState, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { CardMovies } from "../../components/Card/CardMovies";
import api from "../../services/api";
import {
  ButtonSearch,
  Container,
  InputArea,
  InputSearch,
  SearchIcon,
} from "./style";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";

export function Search() {
  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);

  async function handleGetMovies() {
    if (buscar === "") {
      Alert.alert(
        "Erro ao buscar",
        "Por favor insira o nome do filme desejado."
      );
    } else {
      const res = await api.get(
        `https://api.themoviedb.org/3/search/movie?${API_KEY}&language=pt-BR&region=BR&query=homem-aranha`
      );
      const data = await res.data;
      setMovies(data.results);
      setBuscar(buscar);
    }

    // useEffect(() => {
    //   api
    //     .get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
    //     .then((response) => response.data)
    //     .then((data) => setMoviesPopular(data.results));

    //   api
    //     .get(`/movie/top_rated?${API_KEY}&language=${LANGUAGE}&page=1`)
    //     .then((response) => response.data)
    //     .then((data) => setMoviesRecommended(data.results));
    // }, []);
  }
  return (
    <Container>
      <InputArea>
        <InputSearch
          placeholder="Procurar Algo?"
          onChangeText={setBuscar}
          value={buscar}
        />
        <ButtonSearch
          title="Buscar"
          onPress={handleGetMovies}
          activeOpacity={0.7}
        >
          <SearchIcon name="search" />
        </ButtonSearch>
      </InputArea>
      {/* <FlatList
        data={movies}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      /> */}
    </Container>
  );
}
