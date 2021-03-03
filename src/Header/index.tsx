import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const Header = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#Da5c5c",
      height: 96,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/logo.png")} />
      <Text>Ws Delivery !</Text>
    </View>
  );
};

export default Header;
