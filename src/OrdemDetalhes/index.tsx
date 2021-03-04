import { Linking, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Header from "./../Header/index";
import { Ordem } from "../types";
import OrdemCard from "../OrdemCard";
import { RectButton } from "react-native-gesture-handler";
import { confirmDelivery } from "../api";
import { Alert } from "react-native";

type Props = {
  route: {
    params: {
      ordem: Ordem;
    };
  };
};

function OrdemDetalhes({ route }: Props) {
  const ordem = route.params.ordem;
  const navigation = useNavigation();

  const handleConfirmDelivery = () => {
    confirmDelivery(ordem.id)
      .then(() => {
        Alert.alert(`Pedido ${ordem.id} confirmado com sucesso!`);
        navigation.navigate("Ordens");
      })
      .catch(() => {
        Alert.alert(
          `Houve um erro ao confirmar a entrega do pedido ${ordem.id}`
        );
      });
  };
  const handleOnCancel = () => {
    navigation.navigate("Ordens");
  };
  const handleStartNavigation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${ordem.latitude},${ordem.longitude}`
    );
  };
  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrdemCard ordem={ordem} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>CONFIRMA ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  button: {
    backgroundColor: "#DA5C5C",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: -0.24,
    fontFamily: "OpenSans_700Bold",
  },
});
export default OrdemDetalhes;
