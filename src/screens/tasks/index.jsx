import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultScreenStyles } from '../../styles/defaultSecreenStyle'
import floatActionButton from '../../components/ui/floatActionButton'
import { useSelector } from 'react-redux'
import taskItem from '../../components/tasks/taskItem'



const Tasks = () => {

    const { tasks } = useSelector(state => state?.tasks)

    return (
        <View style={defaultScreenStyles.container}>
            <FlatList
                ListEmptyComponent={<Text style={{ textAlign: 'center', fontSize: 18 }}>Bulunamadı!!</Text>}
                data={tasks}
                renderItem={({ item }) => <taskItem item={item} />}
            />
            <floatActionButton />
        </View>
    )
}

export default Tasks

const styles = StyleSheet.create({})