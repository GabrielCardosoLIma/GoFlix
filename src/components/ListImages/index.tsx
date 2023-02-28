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

interface PropsFavorite {
  id: string;
  title: string;
  favorite: boolean;
}

type PropsImagesMovies = {
  data: Props;
};

export function ListImages({ data }: PropsImagesMovies) {
  const [favorites, setFavorites] = useState(false);
  const navigation = useNavigation();
  const window = useWindowDimensions();

  function handleDoneToggle() {
    // Referência para a coleção de filmes no Firebase
    const moviesRef = firestore().collection("Filmes");

    moviesRef
    .where("id", "==", `${data.id}`)
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as PropsFavorite[];
      console.log(data);
      setFavorites(data[0].favorite)
    })

    // Verifica se o filme já está cadastrado
    moviesRef
      .doc(`${data.id}`)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          // Atualiza o campo favorite para false
          moviesRef
            .doc(`${data.id}`)
            .update({ favorite: false })
            .then(() => console.log("Filme atualizado com sucesso!"))
            .catch((error) =>
              console.error("Erro ao atualizar filme: ", error)
            );
        } else {
          moviesRef
            .doc(`${data.id}`)
            .set({ id: `${data.id}`, title: data.title, favorite: true })
            .then(() => console.log("Filme cadastrado com sucesso!"))
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

  }, [])

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
          <AddIcon name={data.favorite ? "check" : "plus"} />
          <TextButtonAdd>Minha Lista</TextButtonAdd>
        </ButtonAdd>
      </Buttons>
    </Container>
  );
}
