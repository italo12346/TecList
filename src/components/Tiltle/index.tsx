import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export default function Title(){
 return (
    <View style={styles.boxTitle}>
    <Text style={styles.texTitle}>Minhas Tecnologias</Text>
  </View>  
 )   
}

const styles = StyleSheet.create({
    boxTitle:{
      width:"100%",
      height:190,
      alignItems:"center",
      backgroundColor:"#0D0D0D"
    },
    texTitle:{
      fontSize:20,
      marginTop:60,
      color:"#4EA8DE"
    }
})