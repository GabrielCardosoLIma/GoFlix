import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { AlignStar, Assessment, ButtonFavorite, Container, IconStarButtonFavorite, ImageMovie, StarIcon, StarRating, TextButtonFavorite, TtileMovie, VoteAverage } from "./style";

interface Props {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
}

type CardFavoritesProps = {
  data: Props;
};

export function CardFavorites({ data }: CardFavoritesProps) {
    const [favorites, setFavorites] = useState(true);

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
      <ImageMovie
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
      />
      <Assessment>
        <TtileMovie>{data.title}</TtileMovie>
        <StarRating>
          <AlignStar>
            <StarIcon name="star" />
          </AlignStar>
          <VoteAverage>{data.vote_average}/10</VoteAverage>
        </StarRating>
        <ButtonFavorite onPress={handleDoneToggle}>
            <IconStarButtonFavorite
              style={favorites ? { color: "#eead2d" } : { color: "#000" }}
              name={favorites ? "star" : "staro"}
            />
            <TextButtonFavorite>
              {favorites ? "Favorito" : "Favoritar"}
            </TextButtonFavorite>
          </ButtonFavorite>
      </Assessment>
    </Container>
  );
}
