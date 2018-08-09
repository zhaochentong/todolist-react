import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list: [],
	  	inputValue: ''
	  }
	}

	handleBtnClick(){
		this.setState({
			list:[...this.state.list, this.state.inputValue],
			inputValue: ''
		})

	}

	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	handleItemClick(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list
		})
	}

	render() {
    	return (
      		<div className="ToDoList">
        	<input value = {this.state.inputValue} onChange = {this.handleInputChange.bind(this)}/>
        	<button onClick = {this.handleBtnClick.bind(this)}>add</button>
			<ul>
				{
				this.state.list.map((item,index) => {
					// return <li key = {index} onClick = {this.handleItemClick.bind(this,index)}>{item}</li>
					return <ToDoItem key = {index} content = {item} />
				})
				}
			</ul>
      		</div>
    	);
    }
}

export default ToDoList;
