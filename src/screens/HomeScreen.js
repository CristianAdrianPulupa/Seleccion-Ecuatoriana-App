import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { styles } from "../styles/styles";
import seleccion from "../data/seleccion.json";

const imagenes = {
  enner: require("../../assets/Enner.jpg"),
  caicedo: require("../../assets/Moises.jpg"),
  hincapie: require("../../assets/Piero.jpg"),
  pacho: require("../../assets/William.jpg"),
  pedro: require("../../assets/Pedro.jpg"),
};
const Participaciones = {
  "Estados Unidos, México y Canadá 2026": require("../../assets/mundial2026.jpg"),
};

export default function HomeScreen() {
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/ecuador-logo.png")}
          style={styles.homeLogo}
        />

        <Text style={styles.title}>{seleccion.equipo}</Text>
        <Text style={styles.subtitle}>{seleccion.apodo} {seleccion.bandera}</Text>
      </View>
 
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚽ Información del Equipo</Text>
        <Text style={styles.text}>{seleccion.descripcion}</Text>
      </View>

      <View style={styles.card}>
  <Text style={styles.cardTitle}>👥 Mejores goleadores</Text>

  {seleccion.goleadores.map((jugador, index) => (
    <View key={index}>
      
      {jugador.nombre && (
      <Text style={styles.cardTitle}>
      {jugador.nombre}
      </Text>
      )}

      {jugador.Edad && (
      <Text style={styles.text}>
        • {jugador.Edad} años
      </Text>
      )}

      <Text style={styles.text}>
        • {jugador.club}
      </Text>

      <Text style={styles.text}>
        • {jugador.posición}
      </Text>

     <Text style={styles.text}>
      •Número {jugador.numero}
      </Text>

      <Text style={styles.text}>
      •Estatura {jugador.estatura} metros
      </Text>
      

      {imagenes[jugador.imagen] && (
        <Image
          source={imagenes[jugador.imagen]}
          style={styles.Imagenes}
        />
      )}
    </View>
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>📌 Datos básicos</Text>

  <Text style={styles.text}>
    • Confederación: {seleccion.confederacion}
  </Text>
  
  <Text style={styles.text}>
    • Entrenador actual: {seleccion.entrenador}
  </Text>

  <Text style={styles.text}>
    • Estadio: {seleccion.estadio}
  </Text>

  <Text style={styles.text}>
    • Fundación: {seleccion.fundacion}
  </Text>
  <Text style={styles.text}>
    • Capitán: {seleccion.fundacion}
  </Text>
  <Text style={styles.text}>
    • Fundación: {seleccion.fundacion}
  </Text>
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>👥 Convocados destacados</Text>

  {seleccion.convocados.map((convocados, index) => (
    <Text key={index} style={styles.text}>
        • {convocados}
      </Text>
    
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>🏆 Participaciones mundialistas</Text>

  {seleccion.mundiales.map((mundial, index) => (
    <View key={index}>
      <Text style={styles.text}>
        • {mundial}
      </Text>

      {index === seleccion.mundiales.length - 1 && (
        <Text style={styles.item1}>
          🌎 Mundial actual
        </Text>
      )}

      {Participaciones[mundial] && (
        <Image
          source={Participaciones[mundial]}
          style={styles.Imagenes}
        />
      )}
    </View>
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>🏆 Premios</Text>

  {seleccion.premios.map((premios, index) => (
    <Text key={index} style={styles.text}>
      • {premios}
    </Text>
  ))}
</View>

<TouchableOpacity
  style={styles.button}
  onPress={() =>
    Alert.alert(
      seleccion.textoBoton,
      seleccion.mensajeAlerta
    )
  }
>
  <Text style={styles.buttonText}>
    {seleccion.bandera} {seleccion.textoBoton}
  </Text>
</TouchableOpacity>

    </ScrollView>
  );
}