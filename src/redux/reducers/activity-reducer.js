export default function activity(state=[], action)
{
    switch(action.type)
    {
        case 'activity':
        return [action.payload,...state];
        default:
        return state;
    }
}
