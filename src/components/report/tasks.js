import React, { Component,Fragment } from 'react';
 class Tasks extends Component {
	render() {
		return (
            <div className="box tasks">
                <h4>tasks</h4>
                <hr/>
                <div className="container">
                {this.props.tasks.slice(0,3).map((e,i) => 
                    <Fragment key={`task${i}`}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="logn">{e.logn}</div>
                                    </td>
                                    <td> <span>{e.title}</span><br/>
                                        <a href="/" className="delay">
                                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;{e.time}</i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="/">
                                         <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr/>
                    </Fragment>
                    )}
                </div>
            </div>
		);
	}
}
export default Tasks;