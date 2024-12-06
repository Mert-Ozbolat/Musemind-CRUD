import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultScreenStyles } from '../../styles/defaultSecreenStyle'
import Button from '../ui/button'
import Input from '../ui/input'




const AddTask = () => {
    return (
        <View style={defaultScreenStyles.container}>
            <Input placeholder='Pleace set Title' title="Task Title" />
            <Input placeholder='Pleace set date' title="Task Date" />
            <Input placeholder='Pleace set status' title="Task Status" />
            <Button title={"Kaydet"} status="succsess" />
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({})