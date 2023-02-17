import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { CardMovies } from "./src/components/CardMovies";
import api from "./src/services/api";

var API_KEY = "?api_key=2247e13afd4b79d1f58bd84a056ced28";
var LANGUAGE = "pt-BR";
var COUNTRY = "BR";

export default function App() {
  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);

  async function handleGetMovies() {
    const res = await api.get(
      `search/movie${API_KEY}&language=${LANGUAGE}&region=${COUNTRY}&query=${buscar}`
    )
    const data = await res.data
    setMovies(data.results)
    setBuscar(buscar);
  }

  useEffect(() => {
    api.get(`/movie/popular${API_KEY}&language=${LANGUAGE}&page=1`)
      .then(response => response.data)
      .then(data => setMovies(data.results))
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput
          placeholder="Buscar"
          placeholderTextColor="#fff"
          onChangeText={setBuscar}
          value={buscar}
        />
        <Button title="Buscar" onPress={handleGetMovies} />
      </View>
      <FlatList
        data={movies}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
