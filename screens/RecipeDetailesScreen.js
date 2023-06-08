import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";
import HTMLView from "react-native-htmlview";
const RecipeDetailsScreen = ({ route }) => {
  const [ingredients, setIngredients] = useState(undefined);
  const { item } = route.params;
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${item.id}/ingredientWidget.json?apiKey=${process.env.API_KEY_SPOONACULAR}`
      )
      .then((response) => {
        console.log(response.data.ingredients);
        setIngredients(response.data.ingredients);
      }).catch((error) => {
        console.log(error);
      });
      
  }, []);

  return (
    <View style={styles.recipeDetailsContainer}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <Animatable.View animation='fadeInUpBig' style={styles.recipeDetails}>
        <Text style={styles.recipeDetailsTitle}>{item.title}</Text>
        <ScrollView>
          <Text style={styles.recipeDetailsDescription}>Ingredients:</Text>
          {ingredients?.map((ingredient) => (
            <View style={styles.ingredientsContainer} key={ingredient.id}>
              <Text style={styles.ingredients}>- {ingredient.name}</Text>
              <Text style={styles.ingredients}>
                {ingredient.amount.us.value + " " + ingredient.amount.us.unit}
              </Text>
            </View>
          ))}
          <Text style={styles.recipeDetailsDescription}>Instructions:</Text>
          <View style={styles.descriptionView}>
            {<HTMLView value={item.instructions} />}
          </View>
        </ScrollView>
      </Animatable.View>

      {/* Display other details, ingredients, and instructions */}
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  recipeDetailsContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  recipeDetailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },

  recipeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 16,
  },

  recipeDetails: {
    width: "100%",
    height: "70%",
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,

    position: "absolute",
    top: 300,
    padding: 20,
    borderRadius: 40,
    shadowOffset: { width: 0, height: -5 },
    shadowColor: "#000",
    shadowOpacity: 17,
    shadowRadius: 20,
    elevation: 5,
  },
  recipeDetailsDescription: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  ingredients: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  descriptionView: {
    flex: 1,
    marginBottom: 50,
  },
});
