import React, { Component } from 'react';
//data
import tododata from '../flux/todo-data';
 class Progress extends Component {
 	constructor(props) {
  		super(props);
  		this.getToDo = this.getTODO.bind(this);
  		this.state = {
  			todo:tododata.data()
  		}
	}
	render() {
		return (
	        <div className="section progress">
	            <h3>in&nbsp;progress<span>(3)</span></h3>
	            {this.state.todo.map((e,i)=> <div className="containertable"  key={i}>
								                <table>
									                <tbody>
									                    <tr>
									                        <td>
									                            <div className="logn">{e.line}</div>
									                        </td>
									                        <td> <span>{e.title}</span><br/>
									                            <a href={e.link}>
									                            <i className="fa fa-clock-o" aria-hidden="true">&nbsp;{e.data}</i>
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
								            </div>
	            )}
	        </div>
		);
	}
	getTODO()
	{
		this.setState({
			todo:tododata.data()
		});
	}
	componentDidMount()
	{
		tododata.on('change',this.getToDo);
	}
	componentWillUnmount()
	{
		tododata.removeListener('change',this.getToDo);
	}
}
export default Progress;