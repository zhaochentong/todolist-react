import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_ITEM } from './actionTypes.js'


const defaultState = {
	inputValue: 'drinking beer',
	list: [
		'learning whatever'
	]
}

export default (state = defaultState, action) => {
	if(action.type === CHANGE_INPUT_VALUE) { 
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if(action.type === ADD_LIST_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if(action.type === DELETE_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}

	return state

}