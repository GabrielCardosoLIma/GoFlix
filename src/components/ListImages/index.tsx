import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  AddIcon,
  BackdropMovies,
  ButtonAdd,
  ButtonInfo,
  Buttons,
  Container,
  InfoIcon,
  TextButtonAdd,
  TextButtonInfo,
} from "./style";

interface Props {
  id: string;
  favorite: boolean;
  title: string;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  poster_path?: string;
  release_date?: string;
}

type PropsImagesMovies = {
  data: Props;
};

export function ListImages({ data }: PropsImagesMovies) {
  const [favorites, setFavorites] = useState(true);
  const navigation = useNavigation();
  const window = useWindowDimensions();

  async function handleDoneToggle() {
    // Referência para a coleção de filmes no Firebase
    const moviesRef = firestore().collection("Filmes");

    // Verifica se o filme já está cadastrado
    moviesRef
      .doc(`${data.id}`)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          // Atualiza o campo favorite para false
          moviesRef
            .doc(`${data.id}`)
            .update({ favorite: !favorites })
            .then(() => console.log("Filme atualizado com sucesso!"))
            .catch((error) =>
              console.error("Erro ao atualizar filme: ", error)
            );
        } else {
          moviesRef
            .doc(`${data.id}`)
            .set({
              id: `${data.id}`,
              title: data.title,
              poster_path: data.poster_path,
              vote_average: data.vote_average,
              favorite: true,
            })
            .then(() => {})
            .catch((error) =>
              console.error("Erro ao cadastrar filme: ", error)
            );
        }
      })
      .catch((error) =>
        console.error(
          "Erro ao verificar se o filme já está cadastrado: ",
          error
        )
      );
  }

  useEffect(() => {
    // Referência para a coleção de filmes no Firebase
    const moviesRef = firestore().collection("Filmes");

    moviesRef.doc(`${data.id}`).onSnapshot((doc) => {
      const favorite = doc.exists && doc.data()?.favorite;
      setFavorites(favorite || false);
    });
  }, [`${data.id}`]);

  return (
    <Container>
      <BackdropMovies
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
        style={{ width: window.width - 40 }}
      />
      <Buttons>
        <ButtonInfo
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("InfoMovies", {
              id: `${data.id}`,
              title: data.title,
              overview: data.overview,
              backdrop_path: data.backdrop_path,
              poster_path: data.poster_path,
              vote_average: data.vote_average,
              release_date: data.release_date,
            })
          }
        >
          <InfoIcon name="infocirlceo" />
          <TextButtonInfo>Info.</TextButtonInfo>
        </ButtonInfo>
        <ButtonAdd onPress={handleDoneToggle} activeOpacity={0.7}>
          <AddIcon name={favorites ? "check" : "plus"} />
          <TextButtonAdd>Minha Lista</TextButtonAdd>
        </ButtonAdd>
      </Buttons>
    </Container>
  );
}
