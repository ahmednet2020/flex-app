import React, { Component } from 'react';
//import {Link} from "react-router-dom";
//commponts
import Sales from './report/sales';
import Video from './report/video';
import Tasks from './report/tasks';
import Messages from './report/messages';
import Activity from './report/activity';
//data
//import store from '../../redux/store';
import { connect } from 'react-redux';
//action
import { bindActionCreators } from 'redux';
import { addActivity } from '../redux/actions';
 class Report extends Component {
	render() {
		return (
  		<article className="home">
            <div className="content">
                <h3>hello&nbsp;{this.props.user}</h3>
                <section>
                    <Sales />
                    <Video />
                </section>
                <section className="flex1">
                    <Tasks tasks={this.props.tasks}/>
                    <Messages messages={this.props.messages}/>
                    <Activity activity={this.props.activity} addActivity={this.props.addActivity}/>
           	    </section>
            </div>
        </article>
		);
	}
}

function mapStateToProps(store)
{
    return {
        activity:store.activity,
        tasks:store.tasks,
        messages:store.messages
    }
}
function dispatchToProps(dispatch)
{
    return bindActionCreators({addActivity:addActivity},dispatch);
}
export default  connect(mapStateToProps, dispatchToProps)(Report);