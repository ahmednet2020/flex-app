import dispatcher from './Dispatcher';

export function NEWTODO(text)
{
	dispatcher.dispatch({
		type:"NEW_TODO",
		text
	})
}