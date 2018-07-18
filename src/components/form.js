
import React, { Component } from 'react';
//login
import Login from './form/login';
import Register from './form/register';

class Form extends Component
{

	render()
	{
		if(this.props.login)
		{
			return (<Login check={this.props.check} />);
		} else {
			return (<Register />);
		}
	}
}
export default Form;