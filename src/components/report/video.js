import React, { Component } from 'react';
 class Video extends Component {
	render() {
		return (
            <div className="report">
                <div className="content">
                    <h3>report</h3>
                    <form>
                        <select>
                    <option value="year" >last&nbsp;year</option>
                    <option value="month">last&nbsp;month</option>
                    <option value="week">last&nbsp;week</option>
                </select>
                    </form>
                    <div className="reportvideo">
                        <video controls width="100" height="100">
                            <source src="video/1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
		);
	}
}
export default Video;