import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
const RecipeCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => navigation.navigate("RecipeDetails", { item: item })}
    >
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  recipeCard: {
    marginRight: 10,
    width: 200,
    height: 250,
    borderRadius: 10,
    // shadowOffset: { width: 3, height: 5 },
    // shadowColor: "#000",
    // shadowOpacity: 2,
    // shadowRadius: 5,
    // elevation: 5,
    
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
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    top: 220,
    left: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    
  },
});
