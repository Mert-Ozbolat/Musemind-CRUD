import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemeColors } from '../../theme/color'
import { Add } from 'iconsax-react-native'

const floatActionButton = (props) => {
    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Add size={30} color={ThemeColors.black} />
        </TouchableOpacity>
    )
}

export default floatActionButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ThemeColors.green,
        width: 80,
        height: 80,
        borderRadius: 100,
        position: 'absolute',
        bottom: 25,
        right: 25
    }
})