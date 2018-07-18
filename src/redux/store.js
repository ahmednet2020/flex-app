import { applyMiddleware, createStore,combineReducers } from 'redux';
//import data
// import messages from './data/messages';
// import activity from './data/activity';
// import tasks from './data/tasks';
//reducer
//import rootreducers from './reducers/rootreducers';
//class
import activity from './class/activity';
import messages from './class/messages';
import tasks from './class/tasks';
const logger = (s) => (n) => (a) => {
	n(a);
}

const rootreducers = combineReducers({
	activity:activity.reduce.bind(activity),
	messages:messages.reduce.bind(messages),
	tasks:tasks.reduce.bind(tasks)
});
const middleware = applyMiddleware(logger);
//const defaultState = {activity,messages,tasks};
const store = createStore(rootreducers,middleware);
window.store = store;
export default store;