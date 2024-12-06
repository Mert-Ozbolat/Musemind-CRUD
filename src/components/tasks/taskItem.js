import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemeColors } from '../../theme/color'
import { Calendar1, Edit, Trash } from 'iconsax-react-native'
import { setColor } from '../../utils/functions'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../store/actions/tasksActions'
import { UPDATETASK } from '../../utils/routes'


const taskItem = ({ item }) => {

    const dispatch = useDispatch()



    const deleteItem = () => {
        Alert.alert('Warning', 'Do you want to remove the task?', [
            {
                text: 'Sil',
                onPress: () => dispatch(deleteTask(item.id)),
                style: 'destructive',
            },
            {
                text: 'İptal',
                onPress: () => console.log('İptal'),
                style: 'cancel',
            },
        ]);
    };

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

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={deleteItem} style={{ marginHorizontal: 10 }}>
                    <Trash size='25' color={ThemeColors.black} variant='Outline' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(UPDATETASK, { task: item })}>
                    <Edit size='25' color={ThemeColors.black} variant='Outline' />
                </TouchableOpacity>
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