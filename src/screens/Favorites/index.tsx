import firestore from "@react-native-firebase/firestore";
import { FlatList, Text } from "react-native";
import { Tabs } from "../../components/Tabs";
import { useNavigation } from "@react-navigation/native";
import { Container, Header, TitleFavorites } from "./style";
import { useEffect, useState } from "react";
import { CardSearch } from "../../components/CardSearch";

export function Favorites() {
  const navigation = useNavigation();

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
        return { id: doc.id && doc.data() };
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
      <FlatList
        data={data[0]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardSearch data={item} />}
      />
      <Tabs
        onPress1={handleColorSelectionHome}
        onPress2={handleColorSelectionFavorite}
        isSelected={selectedColorFavorite}
      />
    </Container>
  );
}
