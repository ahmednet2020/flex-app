import React, { Component } from 'react';
import {Link} from "react-router-dom";
 class Header extends Component {
	render() {
		return (
	        <header>
	            <nav>
	                <div className="content">
	                    <div className="lefticon">
	                        <a href="" className="menueefct">
	                        	<i className="fa fa-caret-left" aria-hidden="true" id="arrow1"></i>
	                        </a>
	                        <a href="" className="menueefct">
	                        	<i className="fa fa-bars" aria-hidden="true"></i>
	                        </a>
	                        <form>
	                            <i className="fa fa-search" aria-hidden="true"></i>
	                            <input id="search3" type="search" placeholder="search..." />
	                        </form>
	                    </div>
	                    <div className="righticon">
	                        <button type="button" className="addprogict">
	                        	<i className="fa fa-plus" aria-hidden="true"></i>&nbsp;add&nbsp;project
	                        </button>
	                        <h2 className="username">
	                       		 <Link to="about">{this.props.user}</Link>
	                        </h2>
	                        <a href="">
	                        	<i className="fa fa-envelope" aria-hidden="true"></i>
	                        </a>
	                        <a href="">
	                        	<i className="fa fa-bell" aria-hidden="true"></i>
	                        </a>
	                        <div className="imguser">
	                        	<img src={`/img/${this.props.imguser}.jpg`} alt="imgsor" />
	                            <Link to="/" onClick={this.props.out}>
	                            	<i className="fa fa-sort-desc" aria-hidden="true"></i>
	                            </Link>
	                        </div>
	                    </div>
	                </div>
	            </nav>
        	</header>
		);
	}
}
export default Header;