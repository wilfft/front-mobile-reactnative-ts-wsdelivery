import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const logo = require("../assets/logo.png");

function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={styles.text}>Ws Delivery !</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#Da5c5c",
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    height: 86,
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
export default Header;
