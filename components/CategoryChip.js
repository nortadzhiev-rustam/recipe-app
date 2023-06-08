import React from "react";

import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";

const CategoryChip = ({ item, selectedCategory, setSelectedCategory }) => {
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    // Handle category selection/filtering logic here
  };
  return (
    <Chip
      key={item.id}
      style={selectedCategory === item ? styles.selectedChip : styles.chip}
      onPress={() => handleCategorySelection(item)}
    >
      {item.title}
    </Chip>
  );
};

export default CategoryChip;

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 6,
  },
  selectedChip: {
    marginHorizontal: 6,
    backgroundColor: "#2F80ED", // Customize the selected chip color
  },
});
