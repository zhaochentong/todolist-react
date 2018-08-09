import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list: [],
	  	inputValue: ''
	  }

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this)
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

	handleDelete(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list
		})
	}

	getToDoItems(){
		return(
			this.state.list.map((item,index) => {
				return(
					<ToDoItem 
						key = {index} 
						content = {item} 
						index = {index} 
						deleteItem = {this.handleDelete} 
					/>
				) 
			})
		)
	}

	render() {
    	return (
      		<div className="ToDoList">
        	<input value = {this.state.inputValue} onChange = {this.handleInputChange}/>
        	<button className = 'btn' onClick = {this.handleBtnClick}>add</button>
			<ul>{this.getToDoItems()}</ul>
      		</div>
    	);
    }
}

export default ToDoList;
