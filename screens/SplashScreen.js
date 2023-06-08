import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      // Navigate to the HomeScreen or any other screen after the splash screen
      navigation.navigate("Recipes");
    }, 3000); // 3 seconds

    // Clean up the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#352861", "#FF4500", "#5c4c92"]}
        style={styles.background}
      />
      <Image
        source={require("../assets/Splash-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Recipe App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

export default SplashScreen;
