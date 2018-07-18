import React, { Component } from 'react';
//actions
import account from '../../flux/data';
import * as action from '../../flux/loginaction';
class Register extends Component
{
	constructor(props) {
  		super(props);
  		this.state = {
  			class:"register2",
  			userclass:"",
  			emailclass:""
  		};
  		this.classActive = this.classnames.bind(this);
	}
	username()
	{
		let name = this.refs.username.value.toLocaleLowerCase();
		action.USERNAME(name);
	}
	email()
	{
		let email = this.refs.email.value.toLocaleLowerCase();
		action.EMAIL(email);
	}
	createaccount(vals, event)
	{
		event.preventDefault();
		action.NEWAccount(vals);
		for(let input in this.refs)
		{
			this.refs[input].value = '';
		}
	}
	render()
	{
		return (
			<div className="container">
	            <div className="content">
	                <h1>register <span>now &#33;</span></h1>
	                <form method="get" className={this.state.class} onSubmit={this.createaccount.bind(this,this.refs)}>
	                	<i className="fa fa-user fa-1x" aria-hidden="true"></i>
	                    <input type="text" placeholder="Username" ref="username" onKeyUp={this.username.bind(this)} className={this.state.userclass}/>
	                    <br /> <i className="fa fa-user fa-1x" aria-hidden="true"></i>
	                    <input type="email" placeholder="email" ref="email" onKeyUp={this.email.bind(this)} className={this.state.emailclass}/>
	                    <br /> <i className="fa fa-key fa-1x" aria-hidden="true"></i>
	                    <input type="password" placeholder="Password" ref="password"/>
	                    <br /> <i className="fa fa-key fa-1x" aria-hidden="true"></i>
	                    <input type="password" placeholder="Password" ref="password2"/>
	                    <br />
	                    <input type="submit" defaultValue="Register" />
	                </form>
	            </div>
	        </div>
		);
	}
	classnames()
	{
		this.setState({
			userclass:account.username,
  			emailclass:account.email
		});
	}
	componentDidMount()
	{
		setTimeout(()=> {
			this.setState({
				class:"register2 active"
			});
		},100)
		account.on('change',this.classActive);
		//console.log("count", account.listenerCount('change'))
	}
	componentWillUnmount()
	{
		account.removeListener('change',this.classActive);
	}
}
export default Register;