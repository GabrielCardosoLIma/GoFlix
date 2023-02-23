import { BlurView } from "expo-blur";
import { useWindowDimensions, Text } from "react-native";
import { Container } from "./style";

export function Tabs() {
    const window = useWindowDimensions();

    return (
        <Container>
            <BlurView
                style={{
                    top: (window.height - 50),
                    width: window.width,
                    height: 50,
                }}
                tint="dark"
                intensity={50}
            >
            </BlurView>
        </Container>
    )
}