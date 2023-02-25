import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native";
import { CardMovies } from "../../components/Card/CardMovies";
import { SearchIcon } from "../../screens/Search/style";
import { ListImages } from "../../components/ListImages";
import api from "../../services/api";
import {
  ButtonSearch,
  Container,
  Header,
  Menu,
  MoviesInTheaters,
  Title,
  TitleMoviesInTheaters,
} from "./style";
import { Tabs } from "../../components/Tabs";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";

export function Home() {
  const navigation = useNavigation();

  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesRecommended, setMoviesRecommended] = useState([]);

  useEffect(() => {
    api
      .get(`/movie/now_playing?${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.data)
      .then((data) => setMoviesPopular(data.results));

    api
      .get(`/movie/top_rated?${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.data)
      .then((data) => setMoviesRecommended(data.results));
  }, []);
  return (
    <>
      <Container>
        <Header>
          <Menu>
            <Title>GOFLIX</Title>
          </Menu>
          <ButtonSearch onPress={() => navigation.navigate("Search")}>
            <SearchIcon name="search" />
          </ButtonSearch>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={moviesPopular}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListImages data={item} />}
          />
          <MoviesInTheaters>
            <TitleMoviesInTheaters>Em cartaz</TitleMoviesInTheaters>
            <FlatList
              data={moviesPopular}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardMovies data={item} />}
            />
          </MoviesInTheaters>
          <MoviesInTheaters>
            <TitleMoviesInTheaters>Mais Assistidos</TitleMoviesInTheaters>
            <FlatList
              data={moviesRecommended}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardMovies data={item} />}
            />
          </MoviesInTheaters>
        </ScrollView>
      </Container>
      <Tabs />
    </>
  );
}
