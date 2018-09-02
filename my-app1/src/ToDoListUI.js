import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class ToDoListUI extends Component {

	render(){
		return (
			<div>
		      <Input 
		          placeholder = 'todo info' 
		          value = {this.props.inputValue} 
		          onChange = {this.props.handleInputChange}
		          style = {{
		            width: '300px', 
		            marginTop: '10px', 
		            marginLeft: '10px',
		            marginRight: '10px',
		            marginBottom: '20px'
		          }}
		        />
		        <Button type="primary" onClick = {this.props.handleBtnClick}>
		          primary
		        </Button>
		        <List
		          bordered
		          dataSource={this.props.list}
		          renderItem={(item, index) => (<List.Item onClick = {(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
		          style = {{width: '350px', marginLeft: '10px'}}
		        />
	        </div>
        );
	}
    
}

export default ToDoListUI;