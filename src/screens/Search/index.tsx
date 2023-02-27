import React, { useState, useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList } from "react-native";
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
import { Tabs } from "../../components/Tabs";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";

export function Search() {
  const navigation = useNavigation();

  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectedColorFavorite, setSelectedColorFavorite] = useState(false);

  function handleColorSelectionHome() {
    setSelectedColorFavorite(!selectedColorFavorite);
    navigation.navigate("Home")
  };

  function handleColorSelectionFavorite() {
    setSelectedColorFavorite(!selectedColorFavorite);
    navigation.navigate("Search")
  };

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

    setSelectedColorFavorite(false)
  }, [buscar]);

  return (
    <Container>
      <InputArea>
        <ButtonGoBack
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <IconGoBack
            name="left"
          />
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
        <SearchTextArea
          style={{ flexDirection: "row", marginBottom: 10 }}
        >
          <SearchText>Resultados para: </SearchText>
          <SearchMovieText>{buscar}</SearchMovieText>
        </SearchTextArea>
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
      <Tabs
        onPress1={handleColorSelectionHome}
        onPress2={handleColorSelectionFavorite}
        isSelected={selectedColorFavorite}
      />
    </Container>
  );
}
