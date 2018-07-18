/*global $, console, document, window, localStorage,alert */
import React, { Component } from 'react';
//components
import Header from '../components/header';
import Aside from '../components/aside';
import Report from '../components/report';
//img
import logo from '../img/logo.gif';
class Home extends Component
{
	render()
	{
		return(
			<div className="warrper home">
				<Header imguser={this.props.id} user={this.props.user} out={this.props.out}/>
				<Aside logo={logo} home="active"/>
				<Report  user={this.props.user}/>
			</div>
		);
	}
	componentDidMount()
	{
		$(function () {
		    $(".menueefct").on("click", function (e) {
		        e.preventDefault();
		        $("aside").toggleClass('asidehidden');
		        $("header").toggleClass('navhidden');
		        $("#arrow1").toggleClass('fa-caret-left fa-caret-right');
		        $("article").toggleClass('contentfull');
		    })
		});
	}
}
export default Home;