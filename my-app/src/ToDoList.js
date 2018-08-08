import React, { Component } from 'react';

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
			list:[...this.state.list, this.state.inputValue]
		})
	}

	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	render() {
    	return (
      		<div className="ToDoList">
        	<input onChange = {this.handleInputChange.bind(this)}/>
        	<button onClick = {this.handleBtnClick.bind(this)}>add</button>
			<ul>
				{
				this.state.list.map((item,index) => {return <li key = {index}>{item}</li>})
				}
			</ul>
      		</div>
    	);
    }
}

export default ToDoList;
