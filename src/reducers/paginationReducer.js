import { GET_PAGINATION, DELETE_DATA, UPDATE_DATA } from "../constants";

const intialState ={
    paginationData : "",
    totalPages : "",
}

export const paginationReducer = (state = intialState, action) =>{
    console.log("Action:", action)
    switch(action.type){
        case GET_PAGINATION:{
            return{
                ...state,
                paginationData : action.payload,
                totalPages : action.payload.totalPages
            }
        }
        case DELETE_DATA:{
            console.log("DeleteData",state)
            let deleteTask = state.paginationData.data.filter((del)=>{return !(del._id.includes(action.payload))})
            console.log("deleteTask",deleteTask)

            return{
                ...state,
                paginationData: {
                    data: deleteTask
                }
            }
        }
        case UPDATE_DATA:{
            const updateTask = state.paginationData.data.filter((update)=>{return (update._id.includes(action.payload.id))})
            console.log("UpdateTask", updateTask)
            updateTask[0].name = action.payload.name;
            updateTask[0].country = action.payload.country;
            updateTask[0].slogan = action.payload.slogan;
        }

        default:
            return{
                ...state
            }
    }
}