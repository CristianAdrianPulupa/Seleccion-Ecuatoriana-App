import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  splashText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#003DA5",
    textAlign: "center",
  },

  splashSubText: {
    fontSize: 18,
    color: "#EF3340",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    marginBottom: 25,
    //marginRight: 80,
  },

// CUADRO PRINCIPAL*******************************
  header: {
    backgroundColor: "#FFCC00",
    paddingTop: 55,
    paddingBottom: 35,
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003DA5",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 22,
    color: "#EF3340",
    fontWeight: "bold",
    marginTop: 6,
  },

  homeLogo: {
    width: 135,
    height: 135,
    resizeMode: "contain",
    marginBottom: 15,
    //marginRight: 80,
    //marginTop: 100,
  },

// CUADRO SECUNDARIO ****************
  card: {
    backgroundColor: "#111827",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1f2937",
    
  },

  cardTitle: {
    color: "#FFCC00",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
    //textAlign: "center",
  },

  text: {
    color: "#f9fafb",
    fontSize: 16,
    lineHeight: 25,
    //textAlign: "center",
  },

  button: {
    backgroundColor: "#003DA5",
    marginHorizontal: 25,
    padding: 17,
    marginTop: 25,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFCC00",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
  },
  Imagenes: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center"
    //marginleft: 80,
  },
   homeWrapper: {
    flex: 1,
  },
  //fondo detras de los cuadros
  homeContainer: {
    flex: 1,
    backgroundColor: "#07111f",
  },
  item1: {
    color: "#f9fafb",
    fontSize: 16,
    marginBottom: 9,
    lineHeight: 23,
    textAlign: "center",
  },
  tituloContainer: {
  position: "absolute",
  top: 70,
},
});


