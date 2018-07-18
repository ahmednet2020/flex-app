class Activity {
	constructor()
	{
		this.data = [
		{   
		    name:"nina jones",
		    title:"add a new project",
		    time:"Just now",
		    img:"1"
		}, {
		    name:"nina jones",
		    title:"add a new project",
		    time:"1 day",
		    img:"1"
		}, {
		    name:"nina jones",
		    title:"add a new project",
		    time:"2 days ",
		    img:"1"
		}, {
		    name:"nina jones",
		    title:"add a new project",
		    time:"3 days",
		    img:"1"
		}, {
		    name:"nina jones",
		    title:"add a new project",
		    time:"4 days",
		    img:"1"
		},{
		    name:"nina jones",
		    title:"add a new project",
		    time:"1 week",
		    img:"1"
		},{
		    name:"nina jones",
		    title:"add a new project",
		    time:"1 month",
		    img:"1"
		},{
		    name:"nina jones",
		    title:"add a new project",
		    time:"1 month",
		    img:"1"
		},{
		    name:"nina jones",
		    title:"add a new project",
		    time:"1 year",
		    img:"1"
		}];
	}

	reduce(state = this.data, action)
	{
		switch(action.type)
		{
			case 'activity':
			this.data.unshift(action.payload);
	        return [].concat(this.data);
	        default:
	        return state;
		}
	}
}
let activity = new Activity();
export default activity;



