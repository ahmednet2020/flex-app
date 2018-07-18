import React, { Component } from 'react';
//components
import Header from '../components/header';
import Aside from '../components/aside';
import Todo from '../components/todo';
import Progress from '../components/progress';
import Completed from '../components/completed';
import Addtodo from '../components/addTodo';
//img
import logo from '../img/logo.gif';
class Workflow extends Component
{
	render()
	{
		return(
			<div className="warrper home">
				<Header imguser={this.props.id} user={this.props.user} out={this.props.out}/>
				<Aside logo={logo} workflow="active"/>
				 <article className="workflow">
	            	<div className="content">
	                	<Addtodo />
	                	<section className="workflowflexbox">
	                		<Todo />
	                		<Progress />
	                		<Completed />
	                	</section>
	                </div>
	             </article>
			</div>
		);
	}
}
export default Workflow;