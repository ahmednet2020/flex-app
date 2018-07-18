import dispatcher from './Dispatcher';

export function check(text)
{
	dispatcher.dispatch({
		type:"check",
		text,
	})
}
export function NEWAccount(text)
{
	dispatcher.dispatch({
		type:"NEW_Account",
		text,
	})
}
export function OUT(text)
{
	dispatcher.dispatch({
		type:"out"
	})
}
export function USERNAME(text)
{
	dispatcher.dispatch({
		type:"USER_NAME",
		text,
	})
}
export function EMAIL(text)
{
	dispatcher.dispatch({
		type:"USER_EMAIL",
		text,
	})
}