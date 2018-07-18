import { EventEmitter } from 'events';
import dispatcher from './Dispatcher';

class TOdodata extends EventEmitter
{
	constructor()
	{
		super();
		this.Todo = [
  			{
  				title:"new website for Symu.co",
  				link:"/google.com",
  				line:"f",
  				data:"1 days left"

  			}];
	}
	data()
	{
		return this.Todo;
	}
	newTodo(obj)
	{
		let date = {
			title:obj,
			link:"/google.com",
			line:"f",
			data:new Date().toDateString()
		}
		this.Todo.push(date);
		this.emit('change');
	}
	handleActions(action)
	{
		switch(action.type)
		{
			case 'NEW_TODO':
			this.newTodo(action.text);
			break;
			default:
			//console.log("todo",action);
		}
	}
}
const tododata = new TOdodata();
dispatcher.register(tododata.handleActions.bind(tododata));
window.todo=tododata;
export default tododata;