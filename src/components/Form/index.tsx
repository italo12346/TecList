import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Form(){
 return (
    <View style={styles.boxForm}>
    <TextInput style = {styles.form}
      placeholder="Adicione uma nova tecnologia"
      placeholderTextColor="#8C8C8C" 
      keyboardType="default"
      maxLength={35}
    />
    <TouchableOpacity style={styles.button}>
    <Ionicons name="md-add-circle-outline" size={25} color={"#ffff"}/>
    </TouchableOpacity>
  </View>  
 )   
}

const styles = StyleSheet.create({
    boxForm:{
      display:"flex",
      padding:0,
      width:"100%",
      height:100,
      alignContent:"center",
      justifyContent:"center",
      flexDirection:"row",
      marginTop:-50,
    },
    form:{
      backgroundColor:"#262626",
      width:275,
      height:60,
      borderRadius:10,
      margin:15,   
      marginLeft:-8,
      color:"#ffff",
      paddingLeft:15

    },
    button:{
      backgroundColor:"#1E6F9F",
      width:52,
      height:52,
      marginTop:20,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10
    }
})