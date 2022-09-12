import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2c50b',
    marginTop: 30,
    paddingHorizontal: 10
  },
  titulo: {
    marginVertical: 20,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20
  },
  cardImg: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardParagrafo: {
    fontSize: 16,
    marginBottom: 10,
  },

  
});

export default estilos;