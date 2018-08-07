import React, { Component } from 'react';

class ToDoList extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list: [
	  		'learn react',
	  		'learn github',
	  		'play detention'
	  	]
	  };
	}

	handleBtnClick(){
		this.setState({
			list:[...this.state.list,'hello world']
		})
	}

	render() {
    	return (
      		<div className="ToDoList">
        	<input/>
        	<button onClick = {this.handleBtnClick.bind(this)}>add</button>
			<ul>
				{
				this.state.list.map((item) => {return <li>{item}</li>})
				}
			</ul>
      		</div>
    	);
    }
}

export default ToDoList;
