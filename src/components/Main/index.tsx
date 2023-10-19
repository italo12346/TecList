import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Main() {
  const [task,setTask] = useState([])
  const [newTask,setNewTask] = useState([])
  return (
    <View style={styles.boxMain}>
      <View style={styles.status}>
        <Text style={styles.textCriadas} >Criadas</Text>
        <Text style={styles.textConcluidas}>Concluidas</Text>
      </View>
      <View style={styles.clipBoard}>
        <Ionicons name="clipboard-outline" size={100} color={"#696969"} />
        <Text style={styles.textClipBoard}>Você ainda não tem tecnologias cadastradas
          Crie tarefas e organize seus itens a fazer</Text>
      </View>
      {/* <FlatList style={styles.FlatList} 
      data={task}
      keyExtractor={item => item.toString()}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  boxMain: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 5,
    alignItems: "center"
  },
  status: {
    display: "flex",
    width: "83%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#808080"
  },
  textCriadas: {
    color: "#4EA8DE"
  },
  textConcluidas: {
    color: "#8284FA"
  },
  clipBoard: {
    width: "83%",
    height: "50%",
    alignItems: "center",
    marginTop: "15%"
  },
  textClipBoard:{
    color:"#8C8C8C",
    textAlign:"center"
  },
  FlatList:{
    flex:1,
    
  }
})