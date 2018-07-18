import React, { Component } from 'react';

class Login extends Component
{
	constructor(props) {
  		super(props);
  		this.state = {
  			class:"login2"

  		}
	}
	render()
	{
		return (
			<div className="container">
	            <div className="content">
	                <h1>welcome <span>back&#33;</span></h1>
	                <form className={this.state.class} onSubmit={this.props.check.bind(this,this.refs)}>
	                	<i className="fa fa-user fa-1x" aria-hidden="true"></i>
	                    <input type="text" placeholder="Username" id="username" ref="username" />
	                    <br />
	                    <i className="fa fa-key fa-1x" aria-hidden="true"></i>
	                    <input type="password" placeholder="Password" id="password" ref="password"/>
	                    <br />
	                    <input type="submit" defaultValue="Enter"/>
	                  </form>
	            </div>
	        </div>
		);
	}
	componentDidMount()
	{
		setTimeout(()=> {
			this.setState({
				class:"login2 active"
			});
		},100)
	}
}
export default Login;