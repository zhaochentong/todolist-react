import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_ITEM } from './actionTypes.js'

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