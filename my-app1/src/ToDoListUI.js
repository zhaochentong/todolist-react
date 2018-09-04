import React from 'react';
import { Input, Button, List } from 'antd';

const ToDoListUI = (props) => {
	return(
		<div>
	      <Input 
	          placeholder = 'todo info' 
	          value = {props.inputValue} 
	          onChange = {props.handleInputChange}
	          style = {{
	            width: '300px', 
	            marginTop: '10px', 
	            marginLeft: '10px',
	            marginRight: '10px',
	            marginBottom: '20px'
	          }}
	        />
	        <Button type="primary" onClick = {props.handleBtnClick}>
	          primary
	        </Button>
	        <List
	          bordered
	          dataSource={props.list}
	          renderItem={(item, index) => (<List.Item onClick = {() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
	          style = {{width: '350px', marginLeft: '10px'}}
	        />
	    </div>
	);
}

export default ToDoListUI;