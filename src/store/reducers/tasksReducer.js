import { ThemeColors } from "../../theme/color"
import { UPDATETASK } from "../../utils/routes"

const { ADDTASK, DELETETASK, UPDATETASK } = require("../types/tasksTypes")


const initialState = {
    tasks: [
        {
            id: 1,
            title: "Dasboard is ready",
            status: "In Progress",
            date: "20 May 2024"
        },
        {
            id: 2,
            title: "Dasboard is ready",
            status: "On Hold",
            date: "07 Oct 2024"
        },
    ],
    testMessage: "Helloww",
    taskStatus: [
        {
            id: 1,
            status: "In Progress",
            value: 0,
            color: ThemeColors.blue
        },
        {
            id: 2,
            status: "In Review",
            value: 0,
            color: ThemeColors.pink
        },
        {
            id: 3,
            status: "On Hold",
            value: 0,
            color: ThemeColors.yellow
        },
        {
            id: 4,
            status: "Completed",
            value: 0,
            color: ThemeColors.green
        },
    ]
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return { ...state, tasks: [...state.tasks, action.payload] }
        case DELETETASK:
            return { ...state, tasks: state.tasks?.filter(task => task.id != action.payload) }
        case UPDATETASK:
            return {
                ...state,
                tasks: state?.tasks?.map(task =>
                    task.id != action.payload.id ? action.payload : task,
                ),
            };
        default:
            return state
    }

}


export default tasksReducer