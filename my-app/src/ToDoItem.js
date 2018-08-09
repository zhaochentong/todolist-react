import React from 'react'

class ToDoItem extends React.Component {
	render(){
		return(
			<div>{this.props.content}</div>
		)
	}
}

export default ToDoItem