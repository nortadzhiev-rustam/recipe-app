import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Chip, Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { recipes, featuredRecipes, categories } from "./data";
import RecipeStackNavigation from './navigations/RecipeStackNavigation';
// Sample data for recipes


const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const renderRecipeCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.recipeCard}
        onPress={() => setSelectedRecipe(item)}
      >
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderRecipeDetails = () => {
    if (selectedRecipe) {
      return (
        <View style={styles.recipeDetailsContainer}>
          <Text style={styles.recipeDetailsTitle}>{selectedRecipe.title}</Text>
          {/* Display other details, ingredients, and instructions */}
        </View>
      );
    }
    return null;
  };

  
  

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <RecipeStackNavigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 60,
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  homepage: {
    // Styles for the homepage section
  },
  exploreSection: {
    marginTop: 5,
    paddingHorizontal: 16,
  },
  categoriesSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  recipeListSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  recipeCard: {
    marginRight: 12,
    width: 200,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "relative",
    borderRadius: 10,
  },
  recipeTitle: {
    position: "absolute",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    top: 220,
    left: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  recipeDetailsContainer: {
    // Styles for the recipe details container
  },
  recipeDetailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  footer: {
    height: 60,
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  featuredSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  recommendationsSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },

  categoriesSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  chip: {
    marginHorizontal: 6,
  },
  selectedChip: {
    marginHorizontal: 6,
    backgroundColor: "#2F80ED", // Customize the selected chip color
  },
});

export default App;
