export default function messages(state=[], action)
{
    switch(action.type)
    {
        case 'messages':
        return [action.payload,...state];
        default:
        return state;
    }
}
