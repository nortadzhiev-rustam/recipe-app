import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import RecipeStackNavigation from "./navigations/RecipeStackNavigation";


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' />
      <RecipeStackNavigation />
    </SafeAreaProvider>
  );
};



export default App;
