import { combineReducers } from 'redux';

//reducers
import activity from './activity-reducer';
import messages from './messages-reducer';
import tasks from './tasks-reducer';

const rootreducers = combineReducers({
	activity,
	messages,
	tasks
});
export default rootreducers;