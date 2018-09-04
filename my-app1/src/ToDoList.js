import React, { Component } from 'react';
import store from './store/index.js';
import 'antd/dist/antd.css';
import { changeInputValue, addListItem, deleteItem, initListData, getToDoList } from './store/actionCreators.js'
import ToDoListUI from './ToDoListUI.js';

class ToDoList extends Component {

	constructor(props) {
    super(props);
  
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  render() {
    return(
      <ToDoListUI 
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }

  componentDidMount(){
    const action = getToDoList();
    store.dispatch(action);
  }

  handleInputChange(e){
    const action = changeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick(){ 
    const action = addListItem();
    store.dispatch(action);
  }

  handleStoreChange(){ 
    this.setState(store.getState());
  }

  handleItemDelete(index){
    const action = deleteItem(index);
    store.dispatch(action);
  }

}

export default ToDoList;
