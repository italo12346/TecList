import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from '../Button';

interface Props {
  name: string;
  remove: (name: string) => void;
  isChecked: boolean;
  toggleCheckbox: () => void;
}

export function Tecnologi({ name, remove, isChecked, toggleCheckbox }: Props) {

  return (
    <View style={isChecked ? [styles.container, styles.checked] : styles.container}>
      <CheckBox
        checked={isChecked}
        onPress={toggleCheckbox}
      />
      <Text style={styles.nameTecnologi}>{name}</Text>
      <View style={styles.btnRemove}>
        <Button title="-" onPress={() => remove(name)} />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    width: 327,
    backgroundColor: "#333333",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:10
  },
  checked: {
    backgroundColor: "#444444", // Altera a cor quando está marcado
  },
  nameTecnologi: {
    marginLeft: 10,
    color: "#fff",
  },
  btnRemove: {
    marginTop: -15,
    marginRight: 10,
    marginBottom: 5
  }
})
