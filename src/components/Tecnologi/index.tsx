import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from '../Button';

interface Props {
    name: string;
    remove: (name: string) => void;
}

export function Tecnologi({ name, remove }: Props) {
    const [listDisabled, setListDisabled] = useState(false);

    return (
        <View style={listDisabled ? [styles.container, styles.disabled] : styles.container}>
            <CheckBox
                checked={listDisabled}
                onPress={() => setListDisabled(!listDisabled)}
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
    },
    disabled: {
        opacity: 0.5, // Opacidade reduzida quando desabilitado
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
