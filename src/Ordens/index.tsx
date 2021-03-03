import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../Header";
import OrdemCard from "../OrdemCard";
function Ordens() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrdemCard />
        <OrdemCard />
        <OrdemCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});
export default Ordens;
