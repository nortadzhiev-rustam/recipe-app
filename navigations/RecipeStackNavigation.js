import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomepageScreen from "../screens/HomeScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailesScreen";
import { Appbar } from "react-native-paper";
import SplashScreen from '../screens/SplashScreen';
const Stack = createStackNavigator();
export default function RecipeStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
      >
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Recipes' component={HomepageScreen} options={{headerShown: false}} />
        <Stack.Screen name='RecipeDetails' component={RecipeDetailsScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
