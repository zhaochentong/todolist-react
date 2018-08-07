import React, { Component } from 'react';

class ToDoList extends Component {

	handleBtnClick(){
		alert('hello');
	}

	render() {
    	return (
      		<div className="ToDoList">
        	<input/>
        	<button>add</button>
			<ul>
				<li>learn react</li>
				<li>learn github</li>
			</ul>
      		</div>
    	);
    }
}

export default ToDoList;
