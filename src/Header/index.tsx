import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#Da5c5c",
      paddingTop: 50,
      flexDirection: "row",
      justifyContent: "center",
      height: 96,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 25,
      letterSpacing: -0.24,
      color: "#fff",
      marginLeft: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <Text style={styles.text}>Ws Delivery !</Text>
    </View>
  );
};

export default Header;
