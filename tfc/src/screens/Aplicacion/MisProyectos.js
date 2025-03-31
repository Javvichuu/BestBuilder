import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet,ImageBackground} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Card from "../../components/Card";
const projects = [
  { id: 1, name: "Proyecto Alpha", description: "Descripción del proyecto Alpha" },
  { id: 2, name: "Proyecto Beta", description: "Descripción del proyecto Beta" },
  { id: 3, name: "Proyecto Gamma", description: "Descripción del proyecto Gamma" },
];

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Mis Proyectos</Text>
        <TouchableOpacity style={styles.bottom}>
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de proyectos */}
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#404040",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop:"15%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color:"white"
  },
   bottom: {
    backgroundColor: '#228B22',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
    background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
});
