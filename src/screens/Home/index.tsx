import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { CardMovies } from "../../components/Card/CardMovies";
import { SearchIcon } from "../../components/Input/style";
import { ListImages } from "../../components/ListImages";
import { Platform } from 'react-native';
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { ButtonMenu, ButtonSearch, Container, Header, Menu, MenuIcon, MoviesInTheaters, Title, TitleMoviesInTheaters } from "./style";
import { BlurView } from "expo-blur";
import { Tabs } from "../../components/Tabs";

const { API_KEY } = process.env;
const LANGUAGE = "pt-BR";


export function Home() {
    const navigation = useNavigation();

    const [moviesPopular, setMoviesPopular] = useState([]);
    const [moviesRecommended, setMoviesRecommended] = useState([]);

    useEffect(() => {
        api.get(`/movie/popular${API_KEY}&language=${LANGUAGE}&page=1`)
            .then(response => response.data)
            .then(data => setMoviesPopular(data.results))

        api.get(`/movie/top_rated${API_KEY}&language=${LANGUAGE}&page=1`)
            .then(response => response.data)
            .then(data => setMoviesRecommended(data.results))
    }, [])
    return (
        <>
            <Container>
                <Header>
                    <Menu>
                        <ButtonMenu
                            activeOpacity={0.7}
                        >
                            <MenuIcon
                                name="menu"
                            />
                        </ButtonMenu>
                        <Title>
                            GOFLIX
                        </Title>
                    </Menu>
                    <ButtonSearch
                        onPress={() => navigation.navigate("Search")}
                    >
                        <SearchIcon
                            name="search"
                        />
                    </ButtonSearch>
                </Header>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <FlatList
                        data={moviesPopular}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ListImages data={item} />}
                    />
                    <MoviesInTheaters>
                        <TitleMoviesInTheaters>
                            Em cartaz
                        </TitleMoviesInTheaters>
                        <FlatList
                            data={moviesPopular}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <CardMovies data={item} />}
                        />
                    </MoviesInTheaters>
                    <MoviesInTheaters>
                        <TitleMoviesInTheaters>
                            Recomendados
                        </TitleMoviesInTheaters>
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
    )
}