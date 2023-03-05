import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, FlatList, View, useWindowDimensions } from "react-native";
import { CardSearch } from "../../components/CardSearch";
import api from "../../services/api";
import {
  ButtonGoBack,
  ButtonSearch,
  Container,
  IconGoBack,
  InputArea,
  InputSearch,
  SearchIcon,
  SearchMovieText,
  SearchText,
  SearchTextArea,
} from "./style";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";

export function Search() {
  const navigation = useNavigation();
  const window = useWindowDimensions();

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
        <ButtonGoBack activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <IconGoBack name="left" />
        </ButtonGoBack>
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
        <SearchTextArea style={{ flexDirection: "row", marginBottom: 10 }}>
          <SearchText>Resultados para: </SearchText>
          <SearchMovieText>{buscar}</SearchMovieText>
        </SearchTextArea>
      )}
      {movies.length === 0 && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: window.height - window.height / 1.7, marginBottom: window.height - window.height / 2}}
        >
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
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
