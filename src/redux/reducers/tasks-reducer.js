export default function tasks(state=[], action)
{
	switch(action.type)
	{
		case 'tasks':
        return [action.payload,...state];
		default:
		return state;
	}
}

