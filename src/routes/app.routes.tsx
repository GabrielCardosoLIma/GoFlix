import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { Platform } from 'react-native';
// import { BlurView } from "expo-blur";
// import { Entypo } from '@expo/vector-icons';
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                // tabBarLabelPosition: 'below-icon',
                // tabBarActiveTintColor: '#fff',
                // tabBarInactiveTintColor: '#ccc',
                // tabBarStyle: {
                //     position: 'absolute',
                //     height: 50,
                //     paddingVertical: Platform.OS === 'ios' ? 5 : 0,
                //     borderTopWidth: 0
                // },
                // tabBarBackground: () => (
                //     <BlurView
                //         style={{
                //             position: 'absolute',
                //             top: 0,
                //             left: 0,
                //             bottom: 0,
                //             right: 0,
                //             width: '100%',
                //             height: 50,
                //         }}
                //         tint="dark"
                //         intensity={100}
                //     />
                // ),

            }}
        >
            <Screen
                name="Início"
                component={Home}
            // options={{
            //     tabBarIcon: (({ size, color }) =>
            //         <Entypo
            //             name="home"
            //             size={size}
            //             color={color}
            //         />
            //     ),
            // }}
            />

            <Screen
                name="Search"
                component={Search}
            // options={{
            //     tabBarIcon: (({ size, color }) =>
            //         <Entypo
            //             name="home"
            //             size={size}
            //             color={color}
            //         />
            //     ),
            // }}
            />
        </Navigator>

    )
}