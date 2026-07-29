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
  david: require("../../assets/David.jpg"),
  raul: require("../../assets/Raul.jpg"),
  fernando: require("../../assets/Fernando.jpg"),
};
const Participaciones = {
  "Estados Unidos, México y Canadá 2026": require("../../assets/mundial2026.jpg"),
};

const Perfil = {
  cristian: require("../../assets/Cristian.png"),
};
export default function HomeScreen() {
  return (
    <ScrollView style={styles.homeContainer}>

      <View style={styles.header}>
        <Text style={styles.title}>{seleccion.nombre}</Text>
        <Image
          source={require("../../assets/Argentina.png")}
          style={styles.homeLogo}
        />
                       {/* Inicio ojo */}
        <Text style={styles.subtitle}>{seleccion.apodo} {seleccion.bandera}</Text>
        <Text style={styles.subtitle}>Director técnico: L.Scaloni</Text>
        <Text style={styles.subtitle}>Capitán : L.Messi</Text>
        <Text style={styles.subtitle}>Final : 1-0</Text>
      </View>


                      {/* Despues del Cuadro */}
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
        • {jugador.posición}
      </Text>

      <Text style={styles.text}>
        • {jugador.lugar}
      </Text>

      <Text style={styles.text}>
      •Número de goles {jugador.goles} 
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
  <Text style={styles.cardTitle}>🏆 Participaciones mundialistas</Text>

  {seleccion.mundiales.map((mundial, index) => (
    <View key={index}>
      <Text style={styles.text}>
        • {mundial}
      </Text>

      {index === seleccion.mundiales.length - 1 && (
        <Text style={styles.item1}>
          🌎 Mundial actual Campeón
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
  <Text style={styles.cardTitle}>Estudiante</Text>

  {seleccion.Estudiante.map((estudiante, index) => (
    <View key={index}>
      
      {estudiante.nombre && (
      <Text style={styles.cardTitle}>
      {estudiante.nombre}
      </Text>
      )}

      {estudiante.Edad && (
      <Text style={styles.text}>
        • {estudiante.Edad} años
      </Text>
      )}

      <Text style={styles.text}>
        • {estudiante.universidad}
      </Text>

      <Text style={styles.text}>
        • {estudiante.carrera}
      </Text>

      <Text style={styles.text}>
      •Materia: {estudiante.Materia} 
      </Text>
      

      {Perfil[estudiante.imagen] && (
        <Image
          source={Perfil[estudiante.imagen]}
          style={styles.Imagenes}
        />
      )}
    </View>
  ))}
</View>

{/* Boton ojo*/}
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
   {seleccion.textoBoton}
  </Text>
</TouchableOpacity>
    </ScrollView>
  );
}