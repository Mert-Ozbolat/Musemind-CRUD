import { View } from 'react-native';
import React, { useState } from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { useDispatch } from 'react-redux';


const UpdateTask = ({ route }) => {
    const task = route.params.task
    const [title, setTitle] = useState(task.title);
    const [date, setDate] = useState(task.date);
    const [status, setStatus] = useState(task.status);
    const dispatch = useDispatch


    const saveTask = () => {
        const form = {
            id: task.id,
            title: title,
            status: status,
            date: date,
        }
        dispatch(UpdateTask(task))
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
                title="Güncelle"
                status="warning"
            />
        </View>
    );
};

export default UpdateTask;