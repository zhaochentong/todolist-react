import React, { Component,Fragment } from 'react';
import './style.css';
import store from './store/index.js';

class ToDoList extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = store.getState();
	  
    this.handleInputChange = this.handleInputChange.bind(this);
	}

  render() {
    return (
      <div>
        <input 
          placeholder = 'todo info' 
          value = {this.state.inputValue} 
          onChange = {this.handleInputChange}
        />
        <div>{this.state.list}</div>
      </div>
    );
  }

  handleInputChange(e){
    console.log(e.target.value);
  }

}

export default ToDoList;
