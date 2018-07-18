import React, { Component } from 'react';
//action
import * as action from '../flux/todo-action';
 class Addtodo extends Component {
 	newTodo(event)
 	{
 		event.preventDefault();
 		let title = this.refs.title.value;
 		action.NEWTODO(title);
 	}
	render() {
		return (
			<div>
		        <form method="get" onSubmit={this.newTodo.bind(this)}>
	            	<i className="fa fa-user fa-1x" aria-hidden="true"></i>
	                <input type="text" placeholder="title" ref="title"/>
	                <input type="submit" defaultValue="add" />
	            </form>
			</div>
		);
	}
}
export default Addtodo;