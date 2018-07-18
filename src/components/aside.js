import React, { Component } from 'react';
import {Link} from "react-router-dom";
 class Aside extends Component {
	render() {
		return (
	    <aside>
            <div className="content">
                <div className="logo"> <img src={this.props.logo} alt="imgsor" /> <span>merkury</span> </div>
                <ul>
                    <li className={this.props.home}>
                        <Link to="home" className="label">
                         <i className="fa fa-home" aria-hidden="true"></i> &nbsp;home
                        </Link>
                    </li>
                    <li className={this.props.workflow}>
                        <Link to="workflow" className="label">
                        <i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp;workflow
                        </Link>
                    </li>
                    <li className={this.props.statistics}>
                        <Link to="statistics" className="label">
                        <i className="fa fa-hourglass-start" aria-hidden="true"></i> &nbsp;statistics
                        </Link>
                    </li>
                    <li className={this.props.calendar}>
                        <Link to="calendar" className="label">
                        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;calendar
                        </Link>
                    </li>
                    <li className={this.props.users}>
                        <Link to="users" className="label">
                        <i className="fa fa-user" aria-hidden="true"></i> &nbsp;users
                        </Link>
                    </li>
                    <li className={this.props.settings}>
                        <Link to="settings" className="label">
                        <i className="fa fa-cog" aria-hidden="true"></i> &nbsp;settings
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
		);
	}
}
export default Aside;