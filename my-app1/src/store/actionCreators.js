import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_ITEM, INIT_LIST_DATA, GET_TODO_LIST } from './actionTypes.js'
import axios from 'axios';

export const changeInputValue = (value) => ({
	type: CHANGE_INPUT_VALUE,
    value
})

export const addListItem = () => ({
	type: ADD_LIST_ITEM
})

export const deleteItem = (index) => ({
	type: DELETE_ITEM,
    index
})

export const initListData = (data) => ({
	type: INIT_LIST_DATA,
	data
})

export const getToDoList = () => {
	return (dispatch) => {
	  axios.get('/todo').then((res) => {
      const data = res.data;
      const action = initListData(data);
      dispatch(action);
      })
	}	
}