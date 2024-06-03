import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";
import DestinationScreen from "../../screens/DestinationScreen";
import { View, Text } from 'react-native'
import React from 'react'


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Destination" component={DestinationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;