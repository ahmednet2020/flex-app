class Tasks {
	constructor()
	{
		this.data = [
		{
		    title:"new website for Symu.co",
		    time:"1 days delays",
		    logn:"n"
		}, {
		    title:"new website for Symu.co",
		    time:"1 days delays",
		    logn:"n"
		}, {
		    title:"new website for Symu.co",
		    time:"1 days delays",
		    logn:"n"
		}, {
		    title:"new website for Symu.co",
		    time:"1 days delays",
		    logn:"n"
		}, {
		    title:"new website for Symu.co",
		    time:"1 days delays",
		    logn:"n"
		}];
	}

	reduce(state = this.data, action){
		switch(action.type)
		{
			case 'tasks':
			this.data.unshift(action.payload);
	        return [...this.data];
	        default:
	        return state;
		}
	}
}
let tasks = new Tasks();
export default tasks;


