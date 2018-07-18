class Messages {
	constructor()
	{
		this.data = [
		{
		    name:"nina jones",
		    message:"Hey You! It’s me again :-)",
		    time:"5 minutes ago",
		    img:"1"
		},{
		    name:"nina jones",
		    message:"Hey You! It’s me again :-)",
		    time:"5 minutes ago",
		    img:"1"
		},{
		    name:"nina jones",
		    message:"Hey You! It’s me again :-)",
		    time:"5 minutes ago",
		    img:"1"
		},{
		    name:"nina jones",
		    message:"Hey You! It’s me again :-)",
		    time:"5 minutes ago",
		    img:"1"
		},{
		    name:"nina jones",
		    message:"Hey You! It’s me again :-)",
		    time:"5 minutes ago",
		    img:"1"
		}];
	}

	reduce(state = this.data, action){
		switch(action.type)
		{
			case 'messages':
			this.data.unshift(action.payload);
	        return [...this.data];
	        default:
	        return state;
		}
	}
}
let messages = new Messages(); 
export default messages;


