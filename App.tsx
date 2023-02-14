import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import api from "./src/services/api";

var API_KEY = "?api_key=2247e13afd4b79d1f58bd84a056ced28";
var LANGUAGE = "pt-BR";
var COUNTRY = "BR";

export default function App() {
  const [buscar, setBuscar] = useState("");

  async function handleGetMovies() {
    const movies = await api
      .get(
        `/search/movie${API_KEY}&language=${LANGUAGE}&region=${COUNTRY}&query=${buscar}`
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setBuscar(buscar);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        placeholderTextColor="#fff"
        onChangeText={setBuscar}
        value={buscar}
      />
      <Button title="Buscar" onPress={handleGetMovies} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
