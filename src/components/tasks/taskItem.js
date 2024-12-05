import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemeColors } from '../../theme/color'
import { Calendar1, More } from 'iconsax-react-native'
import { setColor } from '../../utils/functions'


const taskItem = ({ item }) => {
    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'space-around' }}>

                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                <View>
                    <View style={{
                        backgroundColor: setColor(item.status),
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 3,
                        paddingVertical: 5,
                        borderRadius: 100
                    }} >
                        <Text style={{ color: ThemeColors.white, fontWeight: '500' }} >{item.status}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Calendar1 size='20' color={ThemeColors.black} variant='Outline' />
                    <Text style={styles.date}>{item.date}</Text>
                </View>

            </View>

            <View>
                <More size='25' color={ThemeColors.black} variant='Outline' />
            </View>
        </View>
    )
}

export default taskItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.7,
        borderRadius: 8,
        borderColor: ThemeColors.black,
        marginVertical: 5,
        padding: 10,
        minHeight: 140
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    date: {
        fontSize: 16,
    }
})