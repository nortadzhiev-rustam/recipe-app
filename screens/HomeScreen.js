import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";
import CategoryChip from "../components/CategoryChip";
import { recipes, categories } from "../data";
import { StatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { Appbar } from "react-native-paper";
import axios from "axios";
const HomepageScreen = ({ navigation }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [feedList, setFeedList] = useState([]);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/feeds/list",
    params: {
      size: "5",
      timezone: "+0700",
      vegetarian: "false",
      from: "0",
    },
    headers: {
      "X-RapidAPI-Key": process.env.Rapid_API,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.API_KEY_SPOONACULAR}`
      )
      .then((response) => {
        console.log(response.data.recipes);
        setFeedList(response.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Handle search logic here
  };
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon='menu' />
        <Appbar.Content title='Recipe App' />
        <Appbar.Action
          icon='account'
          onPress={() => {
            /* Handle sign-in button press */
          }}
        />
      </Appbar.Header>
      <ScrollView>
        <StatusBar />
        <View style={styles.searchSection}>
          <Searchbar
            placeholder='Search recipes'
            value={searchQuery}
            onChangeText={handleSearch}
            style={{ backgroundColor: "#fff" }}
          />
        </View>
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Recipes</Text>
          <FlatList
            data={feedList}
            renderItem={({ item }) => (
              <RecipeCard
                item={item}
                navigation={navigation}
                selectedRecipe={selectedRecipe}
                setSelectedRecipe={setSelectedRecipe}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CategoryChip
                item={item}
                navigation={navigation}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for the HomepageScreen
  homepage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredSection: {
    width: "100%",
    padding: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  categoriesSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  searchSection: {
    padding: 16,
  },
});

export default HomepageScreen;
