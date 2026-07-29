import React from "react";
import { Animated, Image, Text, ImageBackground, View } from "react-native";
import { styles } from "../styles/styles";
import seleccion from "../data/seleccion.json";

export default function SplashScreen({ opacity }) {
  return (
    <Animated.View style={[styles.splashContainer, { opacity }]}>
      <Image
        source={require("../../assets/espana.png")}
        style={styles.logo}
      />
      <Text style={styles.splashText}>Bienvenido </Text>
      <Text style={styles.splashSubText}>Torneo de Selecciones 2026</Text>
    </Animated.View>
  );
}








