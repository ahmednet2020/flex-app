import React, { Component,Fragment } from 'react';
 class Messages extends Component {
	render() {
		return (
            <div className="box messages">
                <h4>messages</h4>
                <hr/>
                <div className="container">
                {this.props.messages.slice(0,3).map((e,i) => 
                                    <Fragment  key={`message${i}`}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="imguse"><img src={`/img/${e.img}.jpg`} alt="imgsor" /></div>
                                                </td>
                                                <td><span><b>{e.name}</b>{e.time}</span>
                                                    <p>{e.message}</p>
                                                    <div className="">
                                                        <a href="/"><i className="fa fa-bars"></i>
                                                        </a>&nbsp;&nbsp;&nbsp;
                                                        <a href="/">
                                                        <i className="fa fa-envelope-o"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                    </Fragment>
                                )}
                </div>
            </div>
		);
	}
}
export default Messages;