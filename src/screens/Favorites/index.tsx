import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from "../../components/Tabs";
import { CardFavorites } from "../../components/CardFavorites";
import { HomeScreenNavigationProp } from "../../types";
import { Container, Header, TitleFavorites } from "./style";

export function Favorites() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [selectedColorFavorite, setSelectedColorFavorite] = useState(false);
  const [favorites, setFavorites] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  function handleColorSelectionHome() {
    setSelectedColorFavorite(!selectedColorFavorite);
    navigation.navigate("Home");
  }

  function handleColorSelectionFavorite() {
    setSelectedColorFavorite(!selectedColorFavorite);
    navigation.navigate("Favorites");
  }

  useEffect(() => {
    const moviesRef = firestore().collection("Filmes");

    moviesRef.where("favorite", "==", favorites).onSnapshot((querySnapshot) => {
      const dataMovies = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setData(dataMovies);
    });

    setSelectedColorFavorite(false);
  }, []);
  return (
    <Container>
      <Header>
        <TitleFavorites>Filmes Favoritos</TitleFavorites>
      </Header>
      {data.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FontAwesome name="star-half-empty" size={50} color="#fff" style={{ marginBottom: 10 }} />
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
            Você ainda não possui filmes marcados{"\n"}como favorito.
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardFavorites data={item} />}
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
