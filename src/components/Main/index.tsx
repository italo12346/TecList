import React, { useState, useEffect } from "react"
import { StyleSheet, Text, TextInput, View, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Tecnologi } from "../Tecnologi";
import { Button } from "../Button";

export default function Main() {
  const [nameTecnologi, setNameTecnologi] = useState('');
  const [tecnologi, setTecnologi] = useState(["lindo"] as string[]);

  console.log(tecnologi)
  function addTecnologi() {
    if (tecnologi.includes(nameTecnologi) || nameTecnologi === '') {
      Alert.alert('Error', 'Participate ja existe ou não foi digitado');
    } else {
      setTecnologi([...tecnologi, nameTecnologi]);
    }
    setNameTecnologi('');
  }

  function removeTecnologi(name: string) {
    Alert.alert('Remove', `Deseja realmente remover ${name}`, [
      {
        text: 'sim',
        onPress: () => {
          setTecnologi(tecnologi.filter(tecnologi => tecnologi !== name))
        }
      }, {
        text: 'não'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxForm}>
        <TextInput style={styles.form}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#8C8C8C"
          keyboardType="default"
          onChangeText={text => setNameTecnologi(text)}
          value={nameTecnologi}
          maxLength={35}
        />
        <Button
          title="+"
          onPress={addTecnologi}
        />
      </View>
      <View style={styles.boxMain}>
        <View style={styles.status}>
          <Text style={styles.textCriadas} >Criadas</Text>
          <Text style={styles.textConcluidas}>Concluidas</Text>
        </View>
        <FlatList
          data={tecnologi}
          keyExtractor={name => name}
          renderItem={({ item }) => (<Tecnologi name={item} remove={() => removeTecnologi(item)} />)}
          ListEmptyComponent={() => (
            <View style={styles.clipBoard}>
              <Ionicons name="clipboard-outline" size={100} color={"#696969"} />
              <Text style={styles.textClipBoard}>Você ainda não tem tecnologias cadastradas
                Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxForm: {
    display: "flex",
    padding: 0,
    width: "100%",
    height: 100,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: -50,
  },
  form: {
    backgroundColor: "#262626",
    width: 275,
    height: 60,
    borderRadius: 10,
    margin: 15,
    marginLeft: -8,
    color: "#ffff",
    paddingLeft: 15

  },
  boxMain: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 5,
    alignItems: "center",
  },
  status: {
    display: "flex",
    width: "83%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#808080",
    marginBottom:10
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
    marginTop: "15%",
    alignSelf:"center"
  },
  textClipBoard: {
    color: "#8C8C8C",
    textAlign: "center"
  },
  FlatList: {
    flex: 1,

  }
})