import React, { Component } from 'react';
//components
import Nav from '../components/nav';
import Form from '../components/form';
//img
import logo from '../img/logo.gif';
class Login extends Component
{
	constructor(props) {
  		super(props);
  		this.state = {
  			loginInput:true

  		}
	}
	changeFrom(state)
	{
		this.setState({
			loginInput:state
		});
	}
	render()
	{
		return(
			<div className="warrper login">
			 	<Nav logo={logo} changeFrom={this.changeFrom.bind(this)}/>
			 	<Form login={this.state.loginInput} check={this.props.check}/>
			</div>
		);
	}
}
export default Login;