import React, { useState, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { CardSearch } from "../../components/CardSearch";
import api from "../../services/api";
import {
  ButtonSearch,
  Container,
  InputArea,
  InputSearch,
  SearchIcon,
  SearchText,
} from "./style";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";

export function Search() {
  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  async function handleGetMovies() {
    if (buscar === "") {
      Alert.alert(
        "Erro ao buscar",
        "Por favor insira o nome do filme desejado."
      );
    } else {
      const res = await api.get(
        `/search/movie?${API_KEY}&language=pt-BR&region=BR&query=${buscar}`
      );
      const data = await res.data;
      setMovies(data.results);
      setBuscar(buscar);
      setSearch(search);
    }
  }

  useEffect(() => {
    api
      .get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.data)
      .then((data) => setMovies(data.results));

    api
      .get(`/search/movie?${API_KEY}&language=pt-BR&region=BR&query=${buscar}`)
      .then((response) => response.data)
      .then((data) => setSearch(data.results));
  }, [buscar]);

  return (
    <Container>
      <InputArea>
        <InputSearch
          placeholder="Buscar filme"
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
      {buscar === "" ? (
        <SearchText>Filmes em cartaz</SearchText>
      ) : (
        <SearchText>Resultados para: {buscar}</SearchText>
      )}
      {buscar === "" ? (
        <FlatList
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardSearch data={item} />}
        />
      ) : (
        <FlatList
          data={search}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardSearch data={item} />}
        />
      )}
    </Container>
  );
}
