import { Alert } from "react-native"
import { ADDTASK } from "../types/tasksTypes"



export const addNewTask = task => {
    return async dispatch => {
        dispatch({
            type: ADDTASK,
            payload: task,
        })
        Alert.alert("İşlem Başarılı");
    }
} 