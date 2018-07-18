import React, { Component } from 'react';
 class Sales extends Component {
	render() {
		return (
            <div className="sales">
                <div className="content">
                    <h3>your&nbsp;sales</h3>
                    <form>
                <select value={this.refs.selected}>
                    <option value="year">last&nbsp;year</option>
                    <option value="month" ref="selected">last&nbsp;month</option>
                    <option value="week">last&nbsp;week</option>
                </select>
                    </form>
                    <div className="salesli">
                        <ul>
                            <li>
                                <p>websites</p>
                                <progress max="100" value="80" onMouseMove={() => "this.title = this.value"}></progress>
                            </li>
                            <li>
                                <p>logo</p>
                                <progress max="100" value="40" onMouseMove={() => "this.title = this.value"}></progress>
                            </li>
                            <li>
                                <p>social&nbsp;media</p>
                                <progress max="100" value="30" onMouseMove={() => "this.title = this.value"}></progress>
                            </li>
                            <li>
                                <p>adwords</p>
                                <progress max="100" value="90" onMouseMove={() => "this.title = this.value"}></progress>
                            </li>
                            <li>
                                <p>e&#45;commerce</p>
                                <progress max="100" value="60" onMouseMove={() => "this.title = this.value"}></progress>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}
export default Sales;