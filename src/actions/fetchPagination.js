import {GET_PAGINATION, DELETE_DATA, UPDATE_DATA}from '../constants'
import axios from 'axios';

export const fetchPagination = (index) => dispatch =>{

    axios.get(`https://api.instantwebtools.net/v1/passenger?page=${index}&size=10`)
    .then((response)=>{
        console.log("Response", response)
        //dispatch the action
        dispatch({type:GET_PAGINATION, payload:response.data})
    })
    .catch((err)=>{
        dispatch({type:GET_PAGINATION, payload:err})
    })   
}

export const DeleteData = (index) => dispatch =>{
       dispatch({type:DELETE_DATA, payload: index})
}

export const UpdateData = (id) => dispatch =>{
    dispatch({type:UPDATE_DATA, payload: id})
}