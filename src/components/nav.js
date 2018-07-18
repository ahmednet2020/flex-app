import React, { Component } from 'react';

 class Nav extends Component {
	render() {
		return (
	        <div className="nav">
	            <div className="content">
	                <div className="log"> <img src={this.props.logo} title="" alt="" /> <span>merkury</span> </div>
	                <div className="form1">
                        <button className="register" onClick={this.props.changeFrom.bind(this,false)}>register</button>
                        <button className="login" onClick={this.props.changeFrom.bind(this,true)}>login</button>
	                </div>
	            </div>
	        </div>
		);
	}
}
export default Nav;