import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { ButtonFavorite, ButtonHome, Container, IconFavorite, IconHome, TextButton } from "./style";

interface ButtonProps {
    onPress1: () => void;
    onPress2: () => void;
    isSelected: boolean;
}

export function Tabs({ onPress1, onPress2, isSelected }: ButtonProps) {
    const window = useWindowDimensions();

    return (
        <Container>
            <BlurView
                style={{
                    top: window.height === 789.1428571428571 ? window.height - 20 : window.height - 50,
                    width: window.width,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
                tint="dark"
                intensity={50}
            >
                <ButtonHome
                    activeOpacity={0.7}
                    onPress={onPress1}
                >
                    <IconHome
                        style={{ color: isSelected === false ? "#ccc" : "#fff" }}
                        name="home"
                    />
                    <TextButton
                        style={{ color: isSelected === false ? "#ccc" : "#fff" }}
                    >
                        Inicio
                    </TextButton>
                </ButtonHome>
                <ButtonFavorite
                    activeOpacity={0.7}
                    onPress={onPress2}
                >
                    <IconFavorite
                        style={{ color: isSelected === true ? "#ccc" : "#fff" }}
                        name="favorite"
                    />
                    <TextButton
                        style={{ color: isSelected === true ? "#ccc" : "#fff" }}
                    >
                        Favoritos
                    </TextButton>
                </ButtonFavorite>
            </BlurView>
        </Container>
    )
}