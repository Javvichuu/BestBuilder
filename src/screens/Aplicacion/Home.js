import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet,ImageBackground} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Card from "../../components/Card";

const projects = [
  { id: 1, name: "Proyecto Alpha", description: "Descripción del proyecto Alpha",imagen:"https://blog.vpackage.net/files/1342/instalacion-parques-infantiles-de-exterior.jpg" },
  { id: 2, name: "Proyecto Beta", description: "Descripción del proyecto Beta",imagen:"https://casasarquicenter.com/wp-content/uploads/2021/02/diseno-alicante-passivhaus.jpg" },
  { id: 3, name: "Proyecto Gamma", description: "Descripción del proyecto Gamma",imagen:"https://arquitectura-sostenible.es/wp-content/uploads/2018/02/Cupa-Pizarras_casa-madera-840x530.jpg"},
];
  const uriImagen =
    'https://img.freepik.com/vector-gratis/fondo-degradado-oscuro-espacio-copia_53876-99548.jpg';


export default function Home() {
  return (
    <ImageBackground source={{ uri: uriImagen }} style={styles.background}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>

      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card imagenes={item.imagen}/>
        )}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:"15%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color:"white"
  },
background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
});
