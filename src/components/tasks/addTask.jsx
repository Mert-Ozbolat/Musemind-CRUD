import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/tasksActions';
import { statusTypes } from '../../utils/constants';

const AddTask = () => {
    const [title, setTitle] = useState('New Task2');
    const [date, setDate] = useState('11 Eylül');
    const [status, setStatus] = useState(statusTypes.INREVIEW);
    const dispatch = useDispatch


    const saveTask = () => {
        const form = {
            id: Date.now(),
            title: title,
            status: status,
            date: date,
        }
        dispatch(addNewTask(task))
    }

    return (
        <View style={defaultScreenStyle.container}>
            <Input
                value={title}
                placeholder="Please set title" title="Task Title"
                onChangeText={(value) => setTitle(value)}
            />

            <Input
                value={date}
                placeholder="Please set date" title="Task Date"
                onChangeText={(value) => setDate(value)}
            />

            <Input
                value={status}
                placeholder="Please set status"
                title="Task Status"
                onChangeText={(value) => setStatus(value)}
            />
            <Button
                onPress={() => saveTask()}
                title="Kaydet"
                status="success"
            />
        </View>
    );
};

export default AddTask;