import { StyleSheet, Alert, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import OrdemCard from "../OrdemCard";
//import {} from "react-native-gesture-handler";
import { fetchOrdens } from "./../api";
import { Ordem } from "../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";

function Ordens() {
  const [ordens, setOrdens] = useState<Ordem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrdens()
      .then((res) => setOrdens(res.data))
      .catch(() => Alert.alert("Houve um erro ao buscar os pedidos"))
      .finally(() => setIsLoading(false));
  };
  const handleOnPress = (ordem: Ordem) => {
    navigation.navigate("OrdemDetalhes", { ordem });
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          ordens.map((ordem) => (
            <TouchableWithoutFeedback
              key={ordem.id}
              onPress={() => handleOnPress(ordem)}
            >
              <OrdemCard ordem={ordem} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
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
