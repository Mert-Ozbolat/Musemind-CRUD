import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ThemeColors } from '../../theme/color';

const Input = (props) => {

    const { title } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        margin: 10
    },

    title: {
        fontSize: 18,
        color: ThemeColors.black,
        fontWeight: 'bold'
    },

    input: {
        padding: 10,
        backgroundColor: ThemeColors.gray,
        fontSize: 16,
        borderRadius: 5,
        paddingVertical: 15
    }
})