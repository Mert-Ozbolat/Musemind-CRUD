import { Alert } from "react-native"
import { ADDTASK, DELETETASK, UPDATETASK } from "../types/tasksTypes"



export const addNewTask = task => {
    return async dispatch => {
        dispatch({
            type: ADDTASK,
            payload: task,
        })
        Alert.alert("İşlem Başarılı");
    }
}


export const deleteTask = taskId => {
    return async dispatch => {
        dispatch({
            type: DELETETASK,
            payload: taskId,
        })
        Alert.alert("Silindi");
    }
}


export const UpdateTask = task => {
    return async dispatch => {
        dispatch({
            type: UPDATETASK,
            payload: task,
        })
        Alert.alert("İşlem Başarılı");
    }
} 